import createConfig from '@chriswa/ts-config/eslint'

export default createConfig({
  // Optional: customize the config
  // tsconfigPath: './tsconfig.json',
  // ignores: ['dist', 'coverage', '*.min.*'],
  // browser: true,
  // node: false,
  enforcePathAliases: true, // Enable if using @/ path aliases
})