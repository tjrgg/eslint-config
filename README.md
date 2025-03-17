# @tjrgg/eslint-config

A modern ESLint configuration for TypeScript projects using the new flat config format.

## Installation

1. Create or edit `.npmrc` in your project root:
   ```
   @tjrgg:registry=https://npm.pkg.github.com
   ```

2. Install the package:
   ```bash
   pnpm add -D @tjrgg/eslint-config
   ```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import tjrggConfig from "@tjrgg/eslint-config"

export default tjrggConfig
```

## Features

- TypeScript support
- Prettier integration
- Import sorting and organization
- Unicorn plugin with recommended rules
- Modern JavaScript features
- Strict type checking
- Consistent code style

## Requirements

- ESLint v9.0.0 or higher
- TypeScript
- Node.js 18.0.0 or higher
- GitHub Package Registry access
