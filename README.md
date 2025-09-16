# @chriswa/ts-config

Shared TypeScript and ESLint configuration for chriswa's projects.

## Installation

```bash
npm install --save-dev @chriswa/ts-config eslint typescript
# or
pnpm add -D @chriswa/ts-config eslint typescript
```

## Usage

### ESLint Configuration

Create an `eslint.config.js` file:

```js
import createConfig from '@chriswa/ts-config/eslint'

export default createConfig({
  // Optional customization
  tsconfigPath: './tsconfig.json',     // Path to tsconfig.json
  ignores: ['dist', 'coverage'],       // Files/patterns to ignore
  browser: true,                       // Browser globals (default: true)
  node: false,                         // Node globals (default: false)
  enforcePathAliases: false,           // Disallow relative imports (default: false)
})
```

### TypeScript Configuration

Create a `tsconfig.json` file:

```json
{
  "extends": "@chriswa/ts-config/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "eslint . --fix",
    "format:check": "eslint ."
  }
}
```

## Features

### ESLint Rules Include:
- **TypeScript**: Strict type checking, consistent imports/exports
- **Stylistic**: Single quotes, no semicolons, trailing commas on multiline
- **Import Management**: Sorted imports, no relative imports (enforces @/ aliases)
- **Promise Handling**: Async/await best practices
- **Unicorn**: Modern JavaScript patterns
- **RegExp**: Regular expression safety

### TypeScript Configuration:
- **Strict Mode**: All strict checks enabled
- **Modern Target**: ES2022 with bundler resolution
- **Extra Safety**: Unchecked indexed access, exact optional properties
- **Isolated Modules**: Compatible with bundlers like Vite

## Example Project

See the `example/` directory for a complete setup showing how to configure a new project.

## Publishing

To publish this package:

1. Update version in `package.json`
2. Run `npm publish` (or `pnpm publish`)

## License

MIT