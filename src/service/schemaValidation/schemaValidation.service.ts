import Ajv, { JSONSchemaType } from "ajv";
const ajv = new Ajv();

export default function validateSchema<T>(data: unknown, schema: JSONSchemaType<T>): asserts data is T {
	const validate = ajv.compile(schema);
	const isValid = validate(data);

	if (!isValid) {
		const errors = validate.errors;
		console.error("[ERROR] Encountered schema validation errors :::", JSON.stringify({ errors }));

		// TODO: bad request exception
		throw Error("Encountered schema violation.");
	}
	console.info("[INFO] Schema validation successfull");
}
