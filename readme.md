# Hatch

Hatch is a minimal tool to help you build Shopify Online Store 2.0 themes using the (Shopify CLI)[https://github.com/shopify/shopify-cli]. The focus of the build tools is to use the most lightweight, minimal tools for processing JavaScript and CSS file for the use in themes. 

The theme principals and concepts are following Shopify's Dawn theme with individual CSS and JavaScript files associated with each section.

*Hatch is currently a work in progress and more of a working concept that we are using for our new Online Store 2.0 themes.*

## Tools

Hatch uses the `/src` directory for theme development introducing new `/styles` and `/scripts` directories for processing CSS (PostCSS) files and JavaScript.  When running `yarn dev` a new `/dist` directory will be created where all files will be watched and copied into the directory, PostCSS will run to process and copy CSS files into `/dist/assets`, and Rollup.js will bundle and transpile Javascript files into `/dist/assets`.

(PostCSS)[https://github.com/postcss/postcss] and (Tailwindcss)[https://github.com/tailwindlabs/tailwindcss] JIT compiler is used for creating lean CSS files based on classes used throughout the JavaScript and Liquid files. *Configurations in `postcss.config.js` and `taiwind.config.js`*

(Rollup.js)[https://github.com/rollup/rollup] is used to copy files, transpile JavaScript and bundle modules. Hatch uses the same evergreen, modern browser approach as Dawn to focus on widely supported ES6 JavaScript rather than adding extra bloat to support older browsers. *Configuration in `rollup.config.js`*

#### JavaScript files

`/src/scripts/theme.js` is the primary JavaScript file intended to be used in Layouts/theme.liquid.  Each of the sections that require a JavaScript file will be located in `/src/scripts/[section-name].js`.

#### CSS files

`/src/scripts/theme.css` is the primary CSS file intended to be used in Layouts/theme.liquid.  Each of the sections that require a CSS file will be located in `/src/scripts/[section-name].css`.

#### Caveats

Currently adding a new .js or .css file for sections `src/{scripts,styles}/sections` you need to restart `yarn dev` to include the new files in the build tools.

## Usage

#### Installation

```bash
# yarn
yarn install
```

#### Development

```bash
# yarn
yarn dev
```

1. Cleans up and creates the `/dist` directory
2. Runs Rollup.js, watches for file changes, processes JavaScript files and copies everything into `/src`
3. Runs Postcss and Tailwindcss JIT to create just-in-time compiled CSS files in `/src/assets`
4. Runs Shopify CLI `shopify theme serve` in the `/dist` folder

#### Build

```bash
# yarn
yarn build
```

1. Runs Rollup.js, processes JavaScript files and copies everything into `/src`
2. Runs Postcss and Tailwindcss to create lean CSS files in `/src/assets`

#### Deploy

```bash
# yarn
yarn deploy
```

1. Builds the theme (see above)
2. Runs Shopify CLI `shopify theme push --development` to push to a development unpublished theme

#### Package

```bash
# yarn
yarn package
```

1. Builds the theme (see above)
2. Runs Shopify CLI `shopify theme package` to create a versioned .zip file for the theme
3. Copies the versioned theme .zip file to `/build`

