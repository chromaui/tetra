# Tetra

Chromatic's design system / UI component library, published to NPM as `@chromatic-com/tetra`. Used across Chromatic's marketing sites and documentation.

## Commands

```bash
pnpm install          # Install dependencies
pnpm run dev          # Watch build + Storybook on port 6006
pnpm run build        # Build library with tsup → dist/
pnpm run storybook    # Start Storybook dev server on port 6006
pnpm run type-check   # TypeScript check (noEmit)
pnpm run lint         # ESLint
pnpm run lint:fix     # ESLint + Prettier auto-fix
pnpm run release      # Build + auto shipit (NPM publish)
```

## Architecture

- **src/index.ts** — main entry, re-exports all public components
- **src/[ComponentName]/** — each component has `Component.tsx`, `Component.stories.tsx`, `index.ts`
- **src/\_tokens/** — design tokens (colors, spacing, typography, breakpoints)
- **src/\_helpers/** — shared utilities (animations, typography, breakpoint helpers)
- **src/\_hooks/** — custom React hooks (e.g. `useMediaQuery`)
- **src/\_localComponents/** — internal components, not exported
- **dist/** — generated build output (CJS + ESM + `.d.ts`)

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Emotion** (`@emotion/react`, `@emotion/styled`) for CSS-in-JS
- **Radix UI** for accessible component primitives
- **Framer Motion** for animations
- **tsup** for bundling (outputs CJS, ESM, declaration files)
- **Storybook 10** for component development and docs
- **Storybook play functions** for component interaction tests
- **Vitest** for unit tests

## Build Output

tsup produces:

- `dist/index.js` (CJS)
- `dist/index.mjs` (ESM)
- `dist/index.d.ts` / `dist/index.d.mts` (types)

## Adding a Component

1. Create `src/ComponentName/ComponentName.tsx`
2. Create `src/ComponentName/ComponentName.stories.tsx`
3. Create `src/ComponentName/index.ts` (re-export)
4. Add export to `src/index.ts`

## Code Style

- Prettier: semicolons on, single quotes, trailing commas (ES5)
- ESLint extends Storybook config + `@typescript-eslint`
- Pre-commit hook runs lint-staged (lint TS files, format JS/JSON/MD)

## Release

Uses `auto` for automated versioning and NPM publishing. CI runs on every push; commits with `[skip ci]` are ignored. Do not manually bump versions — `auto shipit` handles it.

## MCP Integration

`.mcp.json` configures a Storybook MCP server at `localhost:6006/mcp` for Claude Code integration.
