---
alwaysApply: true
---

# Tetra Component Library - Cursor Rules

This file provides guidance to AI agents when working with code in this repository.

## Critical: Storybook MCP Integration

Before doing any UI, frontend, or React development, ALWAYS call the storybook MCP server to get further instructions.

1. Call `get-storybook-story-instructions` to get the latest instructions for creating or updating stories and ui components.

### Required MCP Tool Usage

**CRITICAL: Never hallucinate component properties!** Before using ANY property on a component from this design system (including common-sounding ones like `shadow`, etc.), you MUST:

1. Call `list-all-documentation` to get a list of all components
2. Call `get-documentation` for that component to see all available properties
3. Only use properties that are explicitly documented or shown in example stories

A story name might not match the property name exactly—always verify properties in the documentation or example stories before using them.

### Post-Task Validation

- After completing any UI related task, run `npx vitest --project storybook` to validate the results
- Address all a11y violations for created UI, edited UI, and any existing components used in the current task
- Iterate until all a11y violations are resolved for any related components

## Project Overview

Tetra is a React component library and design system for Chromatic and Storybook's marketing sites and documentation. Built with:

- **Emotion** (CSS-in-JS) for styling
- **TypeScript** for type safety
- **Storybook** for component development and documentation

## Development Commands

```bash
pnpm run storybook    # Run Storybook on port 6006
pnpm run build        # Build with tsup (CJS + ESM outputs)
pnpm run dev          # Watch mode + Storybook concurrently
pnpm run type-check   # TypeScript type checking
pnpm run lint         # Check for issues
pnpm run lint:fix     # Fix issues and format
pnpm run test         # Run all tests
pnpm run test:watch   # Tests in watch mode
```

## Architecture

### Directory Structure

```
src/
├── _tokens/          # Design tokens (colors, typography, spacing, breakpoints)
├── _helpers/         # Exported helper utilities (breakpoints, typography, animations)
├── _hooks/           # Exported React hooks (useMediaQuery)
├── _localComponents/ # Internal-only components (NOT exported)
├── _localHelpers/    # Internal-only utilities (resetCSS, etc.)
├── _docs/            # Documentation files
├── ComponentName/    # Component directories
│   ├── ComponentName.tsx
│   ├── ComponentName.stories.tsx
│   └── index.ts
└── index.ts          # Main export file
```

### Component Pattern

Each component follows this structure:

- `ComponentName.tsx` - Main component using Emotion styled components
- `ComponentName.stories.tsx` - Storybook stories
- `index.ts` - Re-exports the component

### Export Strategy

- Public components, tokens, helpers, and hooks are exported from `src/index.ts`
- Items prefixed with `_local` are internal-only and NEVER exported
- The library uses both named exports and namespace exports for tokens

## Design Tokens

All design values are in `src/_tokens/tokens.ts`:

- `color` - Color palette (slate, blue, cyan, green, yellow, orange, pink, purple)
- `fontFamily` - Font families (sans, mono)
- `fontWeight` - Font weights (regular, medium, semibold, bold)
- `fontSize` - Font size scale (11px to 60px)
- `lineHeight` - Line height scale (20px to 70px)
- `breakpoint` - Responsive breakpoints (base, sm, md, lg, xl, 2xl)
- `spacing` - Spacing scale (0px to 192px)

## Styling Architecture

Components use Emotion's `styled` API with TypeScript props for variants.

### Media Query Helpers

From `src/_helpers/breakpointsMinMax.ts`:

- Min-width: `minXs`, `minSm`, `minMd`, `minLg`, `minXl`, `min2Xl`
- Max-width: `maxXs`, `maxSm`, `maxMd`, `maxLg`, `maxXl`, `max2Xl`

### Typography Helpers

From `src/_helpers/typography.ts`: pre-configured text styles like `heading1`, `body16`, etc.

## Build Configuration

Built with `tsup` for dual CommonJS/ESM outputs:

- Entry: `src/index.ts`
- Outputs: `dist/index.js` (CJS), `dist/index.mjs` (ESM)
- TypeScript declarations included
- Radix UI packages and framer-motion are bundled (`noExternal`) due to a Radix bug

## Testing

- Vitest with workspace configuration (`vitest.workspace.ts`)
- Playwright browser provider for browser-based tests
- Storybook addon-vitest for testing stories directly
- A11y testing enforced via Storybook addon-a11y

## Storybook Configuration

- Framework: `@storybook/react-vite`
- Addons: a11y, docs, vitest, MCP
- Stories: `src/**/*.stories.@(js|jsx|ts|tsx)`
- A11y tests run in "error" mode (fail CI on violations)
- Custom viewports: xs, sm, md, lg, xl, xxl
- Framer Motion animations disabled for visual testing

## Peer Dependencies

Consuming applications require:

- `@emotion/react` ^11.13.3
- `@emotion/styled` ^11.13.0
- `framer-motion` ^11.0.3
- `react` >=17
- `react-dom` >=17

## Package Management

Uses `pnpm` (version specified in `packageManager` field).

## Key Files

- `src/index.ts` - Main package entry point, controls public API
- `src/_tokens/tokens.ts` - All design tokens
- `tsup.config.ts` - Build configuration
- `.storybook/main.ts` - Storybook configuration
- `.storybook/preview.tsx` - Storybook global settings and decorators
- `vitest.workspace.ts` - Test configuration
