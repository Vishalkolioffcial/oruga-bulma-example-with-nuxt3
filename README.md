# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Oruga with Nuxt 3 & @oruga-ui/theme-bulma

[Oruga](https://oruga.io/documentation/#setup) setup:

```bash
# npm
npm 
npm install @oruga-ui/oruga-next --save


# pnpm
pnpm install @oruga-ui/oruga-next --save

# yarn
yarn add @oruga-ui/oruga-next
```

Oruga doesn't provide a Nuxt.js module at the moment.
You can use Nuxt.js plugins system adding a file (e.g. oruga.js) in your plugins folder containing

``` js
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Oruga)
})
```

To make this plugin available in your app, add this file to the plugins array in your nuxt.config.js
``` js
plugins: [{ src: '~plugins/oruga.js' }]
```
To understand how the plugins work with Nuxt.js, take a look at the [NuxtJS plugin documentation](https://v3.nuxtjs.org/guide/directory-structure/plugins/).

Also add following code in ```nuxt.config.ts``` file:

``` js
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '@oruga-ui/oruga-next/src/scss/oruga-full-vars.scss',
    ],
})

```

## Add Oruga Bulma:

```
npm:
npm install @oruga-ui/theme-bulma

pnpm:
pnpm install @oruga-ui/theme-bulma

yarn:
yarn add @oruga-ui/theme-bulma
```

## Custom Oruga Bulma SCSS:

> NOTE: Install SCSS/SASS package using ```npm install sass```

Add given css in ```assets/scss/app.scss``` file:

``` css 
@import "bulma/sass/utilities/_all";


// Set your colors
$primary: #8c67ef;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
    (
        "white": (
            $white,
            $black,
        ),
        "black": (
            $black,
            $white,
        ),
        "light": (
            $light,
            $light-invert,
        ),
        "dark": (
            $dark,
            $dark-invert,
        ),
        "primary": (
            $primary,
            $primary-invert,
            $primary-light,
            $primary-dark,
        ),
        "link": (
            $link,
            $link-invert,
            $link-light,
            $link-dark,
        ),
        "info": (
            $info,
            $info-invert,
            $info-light,
            $info-dark,
        ),
        "success": (
            $success,
            $success-invert,
            $success-light,
            $success-dark,
        ),
        "warning": (
            $warning,
            $warning-invert,
            $warning-light,
            $warning-dark,
        ),
        "danger": (
            $danger,
            $danger-invert,
            $danger-light,
            $danger-dark,
        ),
    ),
    $custom-colors
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import "bulma/bulma";
@import '@oruga-ui/theme-bulma/dist/scss/bulma';
```

then modify ```plugins/oruga.js``` file as given billow:

``` js

// modified code
import { defineNuxtPlugin } from '#app';
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';

// import '@oruga-ui/theme-bulma/dist/bulma.css'.
import 'assets/scss/app.scss'; // our custom css  file from assets folder

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Oruga, bulmaConfig)
});
```
Then to check code changes on dev run ```npm run dev``` command and check ```http://localhost:3000```

# Thats it!! Thanks!!!