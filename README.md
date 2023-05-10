# Tetra ⍜ ⍚

<img src="public/cover.jpg" />

This library centralised Chromatic and Storybooks' style guides as well as an exhaustive list of components use accross our suite of marketing sites. This is also a good excuse to test all the new features that both Storybook and Chromatic offers. Please feel free to learn from it and ask any questions that comes your way.

## Install

```console
yarn add @chromaui/tetra
```

## Preview

You can view the published Storybook at:
https://main--642d765a7e8afcfb104268dc.chromatic.com

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

## Linking

Often times you want to `link` the package you're developing to another project locally to test it out to circumvent the need to publish it to NPM.

For this we use [yalc](https://github.com/wclr/yalc) which is a tool for local package development and simulating the publishing and installation of packages.

In a project where you want to consume your package simply run:

```console
npx yalc link my-react-package
# or
yarn yalc add my-react-package
```

Learn more about `yalc` [here](https://github.com/wclr/yalc).

## Releasing, tagging & publishing to NPM

To release a new version of the package simply run the following command:

```console
yarn release
```

This command will build the package using [tsup](https://tsup.egoist.dev/#code-splitting), create a new version, a new tag and publish on NPM. Learn more about how to use the `auto` command [here](https://intuit.github.io/auto/docs/welcome/getting-started).

## PostCSS

[tsup](https://github.com/egoist/tsup) supports PostCSS out of the box. Simply run `yarn add postcss -D` add a `postcss.config.js` file to the root of your project, then add any plugins you need. Learn more how to configure PostCSS [here](https://tsup.egoist.dev/#css-support).

Additionally consider using the [tsup](https://github.com/egoist/tsup) configuration option `injectStyle` to inject the CSS directly into your Javascript bundle instead of outputting a separate CSS file.
