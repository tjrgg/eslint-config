import globals from "globals"
import import_ from "eslint-plugin-import"
import parser from "@typescript-eslint/parser"
import pathAlias from "eslint-plugin-path-alias"
// import prettier from "eslint-config-prettier"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import stylistic from "@stylistic/eslint-plugin"
import typescript from "@typescript-eslint/eslint-plugin"
import unicorn from "eslint-plugin-unicorn"

export default [
  {    
    ignores: [
      "**/*.config.js",
      "dist/**/*",
      "node_modules/**/*",
    ],
  },
  // prettier,
  // import_.configs.recommended,
  stylistic.configs.recommended,
  unicorn.configs.recommended,
  {
    files: [ "**/*.js", "**/*.ts" ],
    languageOptions: {
      globals: globals.builtin,
      parser: parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": typescript,
      "import": import_,
      "simple-import-sort": simpleImportSort,
      "path-alias": pathAlias,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
          project: true,
        },
      },
      "path-alias": {
        map: [["@", "./src"]],
      },
    },
    rules: {
      // General
      "no-nested-ternary": [ "error" ],
      "no-useless-catch": [ "error" ],
      "no-useless-concat": [ "error" ],
      "prefer-const": [ "error" ],
      "prefer-spread": [ "error" ],
      "prefer-template": [ "error" ],
      "symbol-description": [ "error" ],
      
      // Stylistic
      "@stylistic/array-bracket-spacing": [ "error", "always" ],
      "@stylistic/indent": [ "error", 2 ],
      "@stylistic/object-curly-spacing": [ "error", "always" ],
      "@stylistic/quotes": [ "error", "double" ],
      "@stylistic/semi": [ "error", "never" ],
      
      // TypeScript
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [ "warn", { fixStyle: "inline-type-imports", prefer: "type-imports" } ],
      "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "explicit" }],
      "@typescript-eslint/no-misused-promises": [ "error", { checksVoidReturn: { attributes: false } } ],
      "@typescript-eslint/no-unused-vars": [ "warn", { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_", varsIgnorePattern: "^_" } ],
      
      // Import
      "import/consistent-type-specifier-style": [ "error", "prefer-inline" ],
      "import/first": [ "error" ],
      "import/newline-after-import": [ "error", { count: 1 } ],
      "import/no-commonjs": [ "error" ],
      "import/no-default-export": [ "error" ],
      "import/no-duplicates": [ "error" ],
      // "import/no-unresolved": [ "error" ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      
      // Path Alias
      "path-alias/no-relative": [ "error" ],
      
      // Sorting
      "sort-keys": [ "error", "asc",{ allowLineSeparatedGroups: true, caseSensitive: false, minKeys: 2, natural: true } ],
      // "sort-imports": [ "error", { allowSeparatedGroups: true, ignoreDeclarationSort: true } ],
      "sort-vars": [ "error", { ignoreCase: false } ],
      
      // Unicorn
      "unicorn/better-regex": [ "error" ],
      "unicorn/catch-error-name": [ "error" ],
      "unicorn/consistent-function-scoping": [ "error" ],
      "unicorn/custom-error-definition": [ "error" ],
      "unicorn/error-message": [ "error" ],
      "unicorn/escape-case": [ "error" ],
      "unicorn/expiring-todo-comments": [ "error" ],
      "unicorn/explicit-length-check": [ "error" ],
      "unicorn/filename-case": [ "error", { "cases": { camelCase: true, kebabCase: true, pascalCase: true } } ],
      "unicorn/import-style": [ "error", { "styles": { "node:path": { "named": true } } } ],
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
