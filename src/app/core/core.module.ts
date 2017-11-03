import { UnauthorizedInterceptorService } from './interceptors/unauthorized-interceptor.service';
import { JwtInterceptorService } from './interceptors/jwt-interceptor.service';
import { StorageService } from './storage.service';
import { SERVICE_CONFIG_TOKEN, SERVICE_CONFIG } from './service-config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
	JwtInterceptorService, UnauthorizedInterceptorService, StorageService,
	{ provide: SERVICE_CONFIG_TOKEN, useValue: SERVICE_CONFIG }
  ]
})
export class CoreModule { }
