import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, switchMap, take, filter } from 'rxjs/operators';
import { TokenService } from './token.service';
import { AuthService } from '../app/core/auth/auth.service';

// const TOKEN_HEADER_KEY = 'Authorization';  // for Spring Boot back-end
const TOKEN_HEADER_KEY = 'x-access-token';    // for Node.js Express back-end

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  //Variable that represent refreshing of the token
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private inject:Injector,private tokenService: TokenService, private authService: AuthService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    // const token = sessionStorage.getItem('token');
    const token = this.tokenService.getToken();
    let authservice = this.inject.get(AuthService);

    if (!token) {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            sessionStorage.setItem(
              'token',
              event.headers.get('access_token')
            );
          }
          return event;
        })
      );
    }

    // If we have a token, we set it to the header
    const req1 = request.clone({
      headers: request.headers.set('access_token', `${token}`),
    });

    return next.handle(req1)
    .pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.headers.get('access_token') !== null) {
            sessionStorage.setItem('token', event.headers.get('access_token'));
          }
        }
        return event;
      }),

    );

  }
}

