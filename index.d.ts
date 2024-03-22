import { Plugin } from 'esbuild'

/**
 * Subset of EJS options.
 */
export type EsbuildPluginEjsOptions = {
  /* Character to use for inner delimiter, by default '%' */
  delimiter: string
  /* Character to use for opening delimiter, by default '<' */
  openDelimiter: string
  /* Character to use for closing delimiter, by default '>' */
  closeDelimiter: string
  /* Name to use for the object storing local variables when not using with Defaults to locals */
  localsName: string
  /* Remove all safe-to-remove whitespace, including leading and trailing whitespace. It also enables a safer version of -%> line slurping for all scriptlet tags (it does not strip new lines of tags in the middle of a line). */
  rmWhitespace: boolean
  /* When true, EJS will use an async function for rendering. */
  async: boolean
}

/**
 * Returns esbuild plugin that adds support for Embedded JavaScript Templates (.ejs) imports.
 *
 * @param  {EsbuildPluginEjsOptions}  options  EJS options
 * @return {Plugin}                   Returns esbuild plugin.
 */
export default function esbuildPluginEjs(options?: EsbuildPluginEjsOptions): Plugin
