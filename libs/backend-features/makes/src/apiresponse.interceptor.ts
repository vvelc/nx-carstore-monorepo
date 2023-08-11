import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ApiresponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe((
      map((data) => {
        console.log('works');
        return ({
          data,
          statusCode: context.switchToHttp().getResponse().statusCode,
        })
      })
    ));
  }
}
