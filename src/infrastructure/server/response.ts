import ApplicationException from "../../domain/exception";
import { errorTitle } from "../infraConfig";

import type { ServerResponse } from "http";
import type {
	IHttpErrorStatusCode,
	IHttpSuccessStatusCode,
} from "../../domain/types/application.types";

export default class ApplicationResponse {
	private readonly _response: ServerResponse;

	constructor(response: ServerResponse) {
		this._response = response;
	}

	sendSuccessResponse(statusCode: IHttpSuccessStatusCode, data: unknown) {
		this._response.statusCode = statusCode;
		this._response.end(JSON.stringify(data));
	}

	sendErrorResponse(error: unknown) {
		let statusCode = 500 as IHttpErrorStatusCode;
		let errorMessage =
			"Unexpected applicaiton failure, further investigation needed.";
		let errorStack = undefined;

		if (error instanceof ApplicationException) {
			statusCode = error.statusCode;
			errorMessage = error.message;
			errorStack = error.stack;
		}

		const response = {
			statusCode: statusCode,
			title:
				errorTitle.get(statusCode) != null
					? errorTitle.get(statusCode)
					: errorTitle.get(500),
			message: errorMessage,
			stackTrace: process.env.STAGE !== "prod" ? errorStack : undefined,
		};

		this._response.statusCode = response.statusCode;
		this._response.end(JSON.stringify(response));
	}
}
