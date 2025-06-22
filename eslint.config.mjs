// import js from '@eslint/js';
// import tseslint from '@typescript-eslint/eslint-plugin';
// import tsParser from '@typescript-eslint/parser';

// export default [
//   {
//     ignores: ['node_modules', 'dist', 'build', 'coverage', '.env'],
//   },
//   js.configs.recommended,
//   {
//     files: ['**/*.ts'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         project: './tsconfig.json',
//         sourceType: 'module',
//         ecmaVersion: 'latest',
//       },
//     },
//     plugins: {
//       '@typescript-eslint': tseslint,
//     },
//     rules: {

//       "no-unused-vars": "error",
//       "no-unused-expressions": "error",
//       "prefer-const": "error",
//       "no-console": "warn",
//       "no-undef": "error",
//       // '@typescript-eslint/no-unused-vars': ['warn'],
//       // '@typescript-eslint/no-explicit-any': 'warn',
//     },
//   },
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.node, process: "readonly" } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
    rules: {
      "no-unused-vars": "warn",
      "no-unused-expressions": "warn",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
  },
  // eslintPluginPrettierRecommended,
];
