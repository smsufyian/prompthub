import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
// import prettierConfig from "eslint-config-prettier"; // You might not need this separately with the plugin
// import pluginPrettier from "eslint-plugin-prettier"; // You might not need to import this directly
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'; // Import the recommended config
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended, // Remove or comment out this line

  // Add Prettier configuration:
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    extends: [
      eslintPluginPrettierRecommended, // Use the imported recommended config
    ],
    rules: {
      // You can add or override specific Prettier rules here if needed
      // "prettier/prettier": "warn", // Or "error" depending on your preference
    },
  },

  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
  { files: ["**/*.json5"], plugins: { json }, language: "json/json5", extends: ["json/recommended"] },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/commonmark", extends: ["markdown/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },

  // You might not need to extend prettierConfig separately anymore
  // prettierConfig,
]);
