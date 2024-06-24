import type { IHttpErrorStatusCode } from "./types/application.types";

export default class ApplicationException extends Error {
	public readonly statusCode: IHttpErrorStatusCode;

	constructor(statusCode: IHttpErrorStatusCode, message: string) {
		super(message);
		this.statusCode = statusCode;
	}
}

export class NotFoundException extends ApplicationException {
	constructor(resource: string) {
		super(404, `Route not found ::: ${resource}`);
	}
}
