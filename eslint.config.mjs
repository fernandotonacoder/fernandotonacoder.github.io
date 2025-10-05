import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: ["coverage/**", "node_modules/**"]
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  },
  {
    files: ["jest.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        setLanguage: "readonly",
        getCurrentLanguage: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },
  {
    files: ["src/js/*.js"],
    ignores: ["src/js/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        setLanguage: "readonly",
        getCurrentLanguage: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },
  {
    files: ["**/*.json"],
    language: "json/json",
    ...json.configs.recommended
  },
  prettier,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "warn"
    }
  }
];