import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

const TOKEN_HEADER = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _loginService: LoginService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Add Jwt in request
        let authReq = req;
        const token = this._loginService.getToken();
        if (token != null) {
            console.log('sadhashdha');
            authReq = authReq.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this._loginService.getToken(),
                },
            });
        }
        console.log('Working...' + this._loginService.getToken());
        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },
];
