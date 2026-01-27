import {
  ESLINT_JSON_RULES,
  ESLINT_MARKDOWN_RULES,
  JS_RULES_PRESET,
  TS_RULES_PRESET
} from "@ogs-gmbh/linter";
import eslintJsonPlugin from "@eslint/json";
import eslintMarkdownPlugin from "@eslint/markdown";
import globals from "globals";
import stylisticPlugin from "@stylistic/eslint-plugin";
import tseslintPlugin from "typescript-eslint";
import jsdocPlugin from "eslint-plugin-jsdoc";
import unicornPlugin from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    plugins: {
      "@tseslint": tseslintPlugin.plugin,
      "@unicorn": unicornPlugin,
      "@stylistic": stylisticPlugin,
      "@jsdoc": jsdocPlugin,
      "@markdown": eslintMarkdownPlugin,
      "@json": eslintJsonPlugin
    }
  },
  {
    ignores: [
      ".git",
      ".husky",
      ".idea",
      ".vscode",
      "node_modules",
      "dist"
    ]
  },
  {
    files: [
      "**/*.ts",
      "**/*.mts",
      "**/*.cts"
    ],
    languageOptions: {
      parser: tseslintPlugin.parser,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: TS_RULES_PRESET
  },
  {
    files: [
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs"
    ],
    rules: JS_RULES_PRESET
  },
  {
    files: [ "**/*.md" ],
    rules: ESLINT_MARKDOWN_RULES,
    language: "@markdown/gfm",
    languageOptions: {
      frontmatter: "yaml"
    }
  },
  {
    files: [ "**/*.json" ],
    language: "@json/json",
    rules: ESLINT_JSON_RULES
  },
  {
    files: [ "**/*.json5" ],
    language: "@json/json5",
    rules: ESLINT_JSON_RULES
  },
  {
    files: [ "**/*.jsonc" ],
    language: "@json/jsonc",
    rules: ESLINT_JSON_RULES
  }
);
