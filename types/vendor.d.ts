declare interface GenericObject {
	[key: string]: any
}

declare interface AppConfig {
	readonly baseURL: string;
	readonly port: number;
	readonly hasReverseProxy: boolean;
	readonly apiURL: string;
}