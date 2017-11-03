import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class JwtInterceptorService {

	constructor(public auth: AuthenticationService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	  request = request.clone({
		setHeaders: {
		  Authorization: `Bearer ${this.auth.getToken()}`
		}
	  });
	  return next.handle(request);
	}

}
