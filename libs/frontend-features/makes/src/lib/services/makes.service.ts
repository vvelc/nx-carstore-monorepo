import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMake } from '@nx-carstore-monorepo/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MakesService {
  constructor(private httpClient: HttpClient) { }
  
  getMakes(): Observable<any> {
    return this.httpClient.get<any>('/api/makes');
  }
}