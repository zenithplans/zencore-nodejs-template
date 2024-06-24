import ApplicationServer from "./infrastructure/server";

async function main() {
	ApplicationServer.getInstance().listen();
}

void main();
