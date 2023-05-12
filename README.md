# Tetra ⍜ ⍚

<img src="public/cover.jpg" />

This library centralised Chromatic and Storybooks' style guides as well as an exhaustive list of components use accross our suite of marketing sites. This is also a good excuse to test all the new features that both Storybook and Chromatic offers. Please feel free to learn from it and ask any questions that comes your way.

https://tetra.chromatic.com

## Install

```console
yarn add @chromaui/tetra
```

## To Do

- [ ] Replace fonts in Text by the new text helpers
- [ ] Move icons to a new library and import it as primitive inside the Icon component


## Developing

Watch and rebuild code with `tsup` and runs Storybook to preview your UI during development.

```console
yarn storybook
```

## Building

Build package with `tsup` for production.

```console
yarn build
```

## PostCSS

[tsup](https://github.com/egoist/tsup) supports PostCSS out of the box. Simply run `yarn add postcss -D` add a `postcss.config.js` file to the root of your project, then add any plugins you need. Learn more how to configure PostCSS [here](https://tsup.egoist.dev/#css-support).

Additionally consider using the [tsup](https://github.com/egoist/tsup) configuration option `injectStyle` to inject the CSS directly into your Javascript bundle instead of outputting a separate CSS file.
