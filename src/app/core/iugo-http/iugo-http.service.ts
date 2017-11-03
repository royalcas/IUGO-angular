import { AuthenticationService } from './../authentication/authentication.service';
import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Request, Headers } from '@angular/http';

@Injectable()
export class IugoHttpService {

	constructor(private backend: ConnectionBackend, private http: Http, private defaultOptions: RequestOptions, private authService: AuthenticationService) {
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		return this.http.request(url, options);
	}

	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.getRequestOptionArgs(options)
					.mergeMap((requestOptions: RequestOptionsArgs) => this.http.get(url));
	}

	post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.getRequestOptionArgs(options)
					.mergeMap((requestOptions: RequestOptionsArgs) => this.http.post(url, body, requestOptions));
	}

	put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.getRequestOptionArgs(options)
					.mergeMap((requestOptions: RequestOptionsArgs) => this.http.put(url, body, requestOptions));
	}

	delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.getRequestOptionArgs(options)
				.mergeMap((requestOptions: RequestOptionsArgs) => this.http.delete(url, requestOptions));
	}

	private getRequestOptionArgs(options?: RequestOptionsArgs): Observable<RequestOptionsArgs> {
		if (options === null) {
			options = new RequestOptions();
		}
		if (options.headers === null) {
			options.headers = new Headers();
		}
		options.headers.append('Content-Type', 'application/json');

		return this.authService.getToken().mergeMap(
			(token: string) => {
			if (!!token) {
				options.headers.append('Authorization', `Bearer ${token}`);
			}
			return Observable.of(options);
		});
	}

}
