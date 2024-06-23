import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import("typescript-eslint").Config} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ ignores: ["node_modules", "docs", "dist"] },
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];
