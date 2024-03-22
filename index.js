const { readFile } = require('fs/promises')
const ejs = require('ejs')

module.exports = function esbuildPluginEjs(options = {}) {
  return {
    name: 'ejs',
    setup(build) {
      build.onLoad({ filter: /\.ejs$/ }, async args => {
        const template = await readFile(args.path, 'utf8')
        const ejsOptions = { ...options, client: true, strict: true, compileDebug: false }
        const generator = ejs.compile(template, ejsOptions)
        const contents = `module.exports = ${generator.toString()};`
        return { contents, loader: 'js' }
      })
    }
  }
}
