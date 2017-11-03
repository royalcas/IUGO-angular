import { Observable } from 'rxjs/Observable';
import { SERVICE_CONFIG_TOKEN } from './../service-config';
import { IServiceConfig } from './../definitions/iservice-config';
import { StorageService } from './../storage.service';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private storage: StorageService, @Inject(SERVICE_CONFIG_TOKEN) private serviceConfig: IServiceConfig) { }

  public getToken(): Observable<string> {
    return this.storage.get(this.serviceConfig.storage.JWT_TOKEN);
  }

  public isAuthenticated(): Observable<boolean> {
	  return Observable.of(!!this.getToken());
  }

}
