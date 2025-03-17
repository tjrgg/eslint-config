import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginImport from "eslint-plugin-import"
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort"
import eslintPluginPathAlias from "eslint-plugin-path-alias"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import globals from "globals"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"

export default [
  eslintConfigPrettier,
  eslintPluginUnicorn.configs.recommended,
  {
    files: [ "**/*.js", "**/*.ts" ],
    ignores: [
      "**/*.config.js",
      "dist",
      "node_modules",
    ],
    languageOptions: {
      globals: globals.builtin,
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "import": eslintPluginImport,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "path-alias": eslintPluginPathAlias,
    },
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-misused-promises": [ "error", { checksVoidReturn: { attributes: false } } ],
      "@typescript-eslint/no-unused-vars": [ "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        }
      ],
      "import/consistent-type-specifier-style": [ "error", "prefer-inline" ],
      "import/no-default-export": [ "error" ],
      "import/no-unresolved": [ "error", { ignore: [ "^(?:@|enderverse|@discordjs|discord-api-types)/" ] } ],
      "no-nested-ternary": "off",
      "path-alias/no-relative": [ "error" ],
      "prefer-const": "error",
      "quotes": [ "error", "double" ],
      "semi": [ "error", "never" ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unicorn/better-regex": [ "error" ],
      "unicorn/catch-error-name": [ "error" ],
      "unicorn/consistent-function-scoping": [ "error" ],
      "unicorn/custom-error-definition": [ "error" ],
      "unicorn/error-message": [ "error" ],
      "unicorn/escape-case": [ "error" ],
      "unicorn/expiring-todo-comments": [ "error" ],
      "unicorn/explicit-length-check": [ "error" ],
      "unicorn/filename-case": [ "error", { "cases": { camelCase: true, kebabCase: true, pascalCase: true } } ],
      "unicorn/import-style": [ "error",
        {
          "styles": {
            "node:path": {
              "named": true
            },
          }
        }
      ],
      "unicorn/new-for-builtins": [ "error" ],
      "unicorn/no-abusive-eslint-disable": [ "error" ],
      "unicorn/no-console-spaces": [ "error" ],
      "unicorn/no-for-loop": [ "error" ],
      "unicorn/no-hex-escape": [ "error" ],
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-nested-ternary": [ "error" ],
      "unicorn/no-new-buffer": [ "error" ],
      "unicorn/no-null": "off",
      "unicorn/no-process-exit": "off",
      "unicorn/no-unreadable-array-destructuring": [ "error" ],
      "unicorn/no-unsafe-regex": "off",
      "unicorn/no-unused-properties": "off",
      "unicorn/no-useless-undefined": [ "error" ],
      "unicorn/no-zero-fractions": [ "error" ],
      "unicorn/number-literal-case": [ "error" ],
      "unicorn/prefer-add-event-listener": [ "error" ],
      "unicorn/prefer-includes": [ "error" ],
      "unicorn/prefer-modern-dom-apis": [ "error" ],
      "unicorn/prefer-module": [ "error" ],
      "unicorn/prefer-negative-index": [ "error" ],
      "unicorn/prefer-number-properties": [ "error" ],
      "unicorn/prefer-optional-catch-binding": [ "error" ],
      "unicorn/prefer-query-selector": [ "error" ],
      "unicorn/prefer-reflect-apply": [ "error" ],
      "unicorn/prefer-replace-all": "off",
      "unicorn/prefer-set-has": [ "error" ],
      "unicorn/prefer-spread": [ "error" ],
      "unicorn/prefer-string-slice": [ "error" ],
      "unicorn/prefer-string-starts-ends-with": [ "error" ],
      "unicorn/prefer-string-trim-start-end": [ "error" ],
      "unicorn/prefer-type-error": [ "error" ],
      "unicorn/prevent-abbreviations": "off",
      "unicorn/string-content": "off",
      "unicorn/throw-new-error": [ "error" ]
    },
  },
] 
