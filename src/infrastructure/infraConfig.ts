import type { IHttpErrorStatusCode } from "../domain/types/application.types";

const serverConfig = {
	PENDING_CONNECTION_QUEUE_LENGTH: 511,
	LISTENING_PORT: 42069,
	LISTENING_HOST: "0.0.0.0",
} as const;

const errorTitle = new Map([
	[500, "Internal Server Error"],
	[400, "Bad Request"],
	[404, "Resource Not Found"],
	[401, "Unauthorized Request"],
	[403, "Forbidden Request"],
]) satisfies Map<IHttpErrorStatusCode, string>;

export { serverConfig, errorTitle };
