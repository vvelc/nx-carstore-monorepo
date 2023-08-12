import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICar } from '@nx-carstore-monorepo/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private httpClient: HttpClient) { }
  
  getCars(): Observable<any> {
    return this.httpClient.get<any>('/api/cars');
  }
}