# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Agent Instructions

## Critical: Storybook MCP Integration

Before doing any UI, frontend, or React development, ALWAYS call the storybook MCP server to get further instructions.

1. Call `get-storybook-story-instructions` to get the latest instructions for creating or updating stories and ui components.

### Required MCP Tool Usage

**CRITICAL: Never hallucinate component properties!** Before using ANY property on a component from this design system (including common-sounding ones like `shadow`, etc.), you MUST:

1. Call `list-all-documentation` to get a list of all components
2. Call `get-documentation` for that component to see all available properties
3. Only use properties that are explicitly documented or shown in example stories
4. CRITICAL: Use the proper tokens and styled components from the design system when creating the UI.

A story name might not match the property name exactly—always verify properties in the documentation or example stories before using them.

## Overview

Tetra is a React component library and design system for Chromatic and Storybook's marketing sites and documentation. It's built with Emotion (CSS-in-JS), TypeScript, and Storybook, and provides styled components with a comprehensive token system.

## Architecture

### Directory Structure

```
src/
├── _tokens/          # Design tokens (colors, typography, spacing, breakpoints)
├── _helpers/         # Exported helper utilities (breakpoints, typography, animations)
├── _hooks/           # Exported React hooks (useMediaQuery)
├── _localComponents/ # Internal-only components (not exported)
├── _localHelpers/    # Internal-only utilities (resetCSS, etc.)
├── _docs/            # Documentation files
├── Button/           # Component directory
│   ├── Button.tsx
│   ├── Button.stories.tsx
│   └── index.ts
└── index.ts          # Main export file
```

### Component Pattern

Each component follows a standard structure:

- `ComponentName.tsx` - Main component implementation using Emotion styled components
- `ComponentName.stories.tsx` - Storybook stories for the component
- `index.ts` - Re-exports the component

Components are styled using `@emotion/styled` and consume design tokens from `src/_tokens/tokens.ts`.

### Design Tokens

All design values are centralized in `src/_tokens/tokens.ts`:

- `color` - Full color palette (slate, blue, cyan, green, yellow, orange, pink, purple)
- `fontFamily` - Font family definitions (sans, mono)
- `fontWeight` - Font weights (regular, medium, semibold, bold)
- `fontSize` - Font size scale (11px to 60px)
- `lineHeight` - Line height scale (20px to 70px)
- `breakpoint` - Responsive breakpoints (base, sm, md, lg, xl, 2xl)
- `spacing` - Spacing scale (0px to 192px)

### Styling Architecture

Components use Emotion's `styled` API with TypeScript props for variants. Responsive styles use media query helpers from `src/_helpers/breakpointsMinMax.ts`:

- `minXs`, `minSm`, `minMd`, `minLg`, `minXl`, `min2Xl` - Min-width media queries
- `maxXs`, `maxSm`, `maxMd`, `maxLg`, `maxXl`, `max2Xl` - Max-width media queries

Typography helpers (`src/_helpers/typography.ts`) provide pre-configured text styles like `heading1`, `body16`, etc.

### Component Export Strategy

- Public components, tokens, helpers, and hooks are exported from `src/index.ts`
- Items prefixed with `_local` are internal-only and never exported
- The library uses both named exports for components and namespace exports for tokens

### Build Configuration

The package is built with `tsup` to create dual CommonJS/ESM outputs:

- Entry: `src/index.ts`
- Outputs: `dist/index.js` (CJS), `dist/index.mjs` (ESM)
- TypeScript declarations: `dist/index.d.ts`, `dist/index.d.mts`
- Radix UI packages and framer-motion are bundled (`noExternal`) due to a Radix bug

### Storybook Setup

Storybook configuration:

- Uses `@storybook/react-vite` framework
- Addons: a11y, docs, vitest, MCP
- Stories are discovered from `src/**/*.stories.@(js|jsx|ts|tsx)`
- A11y tests run in "error" mode (fail CI on violations)
- Custom viewports configured (xs, sm, md, lg, xl, xxl)
- Framer Motion animations are disabled for visual testing

### Peer Dependencies

Components require these peer dependencies in consuming applications:

- `@emotion/react` ^11.13.3
- `@emotion/styled` ^11.13.0
- `framer-motion` ^11.0.3
- `react` >=17
- `react-dom` >=17

### Package Management

Uses `pnpm` (version specified in `packageManager` field). Lock file is `pnpm-lock.yaml`.

## Key Files

- `src/index.ts` - Main package entry point, controls public API
- `src/_tokens/tokens.ts` - All design tokens
- `tsup.config.ts` - Build configuration
- `.storybook/main.ts` - Storybook configuration
- `.storybook/preview.tsx` - Storybook global settings and decorators
- `vitest.workspace.ts` - Test configuration
