import { JSONSchemaType } from "ajv";

import type { IRequest } from "../../domain/types/application.types";

const schema: JSONSchemaType<IRequest> = {
	type: "object",
	properties: {
		foo: { type: "integer" },
		bar: { type: "string", nullable: true },
	},
	required: ["foo"],
	additionalProperties: false,
};

export { schema };
