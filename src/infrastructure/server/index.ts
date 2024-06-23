import { createServer } from "node:http";
import type { Server, ServerOptions } from "node:http";

export default class ApplicationServer {
	private static _instance?: ApplicationServer;
	private readonly _server: Server;

	private constructor(serverOptions: ServerOptions) {
		this._server = createServer(serverOptions);
		this.initializeErrorHandler();
	}

	public static getInstance() {
		if (this._instance == null) {
			// TODO: Setup server configuration
			this._instance = new ApplicationServer({});
		}

		return this._instance;
	}

	private initializeErrorHandler() {
		// TODO: exit process gracefully.
		// TODO: setup notification/error logging and monitoring for server failures
		this._server.on("error", (error) => {
			console.error("[CRITICAL] Encountered unhandled server failure, further investigation needed:::", error);
		});
	}

	public listen() {
		const serverConfig = {
			PENDING_CONNECTION_QUEUE_LENGTH: 511,
			LISTENING_PORT: 42069,
			LISTENING_HOST: "0.0.0.0",
		} as const;

		this._server.listen(
			serverConfig.LISTENING_PORT,
			serverConfig.LISTENING_HOST,
			serverConfig.PENDING_CONNECTION_QUEUE_LENGTH,
			() => {
				console.info("[INFO] Server started listening on port :::", serverConfig.LISTENING_PORT);
			},
		);
	}
}
