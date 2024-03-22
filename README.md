# Esbuild Embedded JavaScript Templates Plugin

[![NPM version][version-badge]][npm-url]
[![NPM downloads][downloads-badge]][npm-url]
[![digitalmaas][dmaas-badge]][dmaas-url]

> An esbuild plugin that adds support for Embedded JavaScript Templates (.ejs) imports.

## Installation

```bash
npm install @digitalmaas/esbuild-plugin-ejs --save-dev
```

## Setup

```js
import esbuild from 'esbuild'
import ejsPlugin from '@digitalmaas/esbuild-plugin-ejs'

await esbuild.build({
  /* all of your config */,
  plugins: [
    ejsPlugin({ /* ejs options */ }),
  ]
})
```

## Usage

```ejs
<!-- template.ejs -->
<html>
  <head>
    <title><%= locals.title =></title>
  </head>
  <body>
    <% if (locals.isAdmin) { %>
      <div>ADMIN</div>
    <% } else { %>
      <div>USER</div>
    <% } %>
    <h1><%= locals.name %></h1>
  </body>
</html>
```

```js
import template from './template.ejs'

const templateAsString = template({ isAdmin: false, title: 'Doc Title', name: 'Cool Test' })
```

## Options

### `delimiter: string`

Character to use for inner delimiter. Defaults to `'%'`.

### `openDelimiter: string`

Character to use for opening delimiter. Defaults to `'<'`.

### `closeDelimiter: string`

Character to use for closing delimiter. Defaults to `'>'`.

### `localsName: string`

Name to use for the object storing local variables. Defaults to `locals`.

### `rmWhitespace: boolean`

Remove all safe-to-remove whitespace, including leading and trailing whitespace. It also enables a safer version of `-%>`` line slurping for all scriptlet tags (it does not strip new lines of tags in the middle of a line).

### `async: boolean`

When true, EJS will use an async function for rendering.

## More Info

- https://ejs.co/
- https://github.com/mde/ejs

## License

MIT License.

Complete license in [./LICENSE](./LICENSE) file.

[version-badge]: https://img.shields.io/npm/v/@digitalmaas/esbuild-plugin-ejs.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/@digitalmaas/esbuild-plugin-ejs.svg?style=flat-square
[dmaas-badge]: https://img.shields.io/badge/sponsored%20by-digitalmaas-green.svg?colorB=00CD98&style=flat-square
[npm-url]: https://www.npmjs.com/package/@digitalmaas/esbuild-plugin-ejs
[dmaas-url]: https://digitalmaas.com/
