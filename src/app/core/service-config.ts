import { IServiceConfig } from './definitions/iservice-config';
import { InjectionToken } from '@angular/core';

export let SERVICE_CONFIG_TOKEN = new InjectionToken('service.config');

export const SERVICE_CONFIG: IServiceConfig = {
	headers: {
		CONTENT_TYPE: 'Content-Type',
		WWW_FORM_URLENCODED: 'application/x-www-form-urlencoded',
		APPLICATION_JSON: 'application/json'
	},
	storage: {
		JWT_TOKEN: 'authentication-token',
		USER_DATA: 'user-data'
	}
};