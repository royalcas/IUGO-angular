export interface IServiceConfig {
	headers: {
		CONTENT_TYPE: string,
		WWW_FORM_URLENCODED: string,
		APPLICATION_JSON: string
	};
	storage: {
		JWT_TOKEN: string,
		USER_DATA: string
	};
}