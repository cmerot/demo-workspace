# npm `workspace` demo

- one `node_modules` for all packages
- declare dependencies with their package name (from `package.json`)

About typescript:

- uses `declaration: true` to generate packages' `index.d.ts`
- `index.d.ts` empty when using `export * from './logger'`,
  but `export { getLogger } from './logger'` works
- so for this to work, dependencies must be built

## demo

```bash
git clone git@github.com:cmerot/npm-workspace.git
cd npm-workspace
npm install
node beneficiary/dist/index.js
```
