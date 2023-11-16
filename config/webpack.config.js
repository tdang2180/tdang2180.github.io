const path = require("path")

module.exports = {
  /** "mode"
   * the environment - development, production, none. tells webpack
   * to use its built-in optimizations accordingly. default is production
   */
  mode: "development",

  /** "entry" the entry point
   */
  entry: "../src/index.js",

  output: {
    /** "path" the folder path of the output file
     */
    path: path.resolve(__dirname, "../public"),

    /** "filename" the name of the output file
     */
    filename: "main.js",

    /** "clean" clean the output directory before emit
     */
    clean: true,
  },

  /** "resolve"
     * Attempt to resolve these extensions in order. If multiple files share the same 
     * name but have different extensions, webpack will resolve the one with the extension 
     * listed first in the array and skip the rest.
     */
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },


  /** "module" determine how the different types of modules will be treated
   */
  module: {
    /** "rules" specify how webpack should transform, process, 
     * or handle modules during the budling process
     */
    rules: [
      {
      /** "test" transform code when a file resolves to '.js or .jsx'
       */
       test: /\.(js|jsx)$/,

      /** "exclude" exclude node_module folder from being searched
       */
       exclude: /node.modules/,
      /** "use" use the babel-loader to transform it before you
       */
       use: 'babel-loader',     
      }
    ]
  },

  /** "devServer" create a dev server using webpack-dev-server
   */
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"),
    },

    /** "port" port of dev server
     */
    port: 9000,

    /** "compress"
     * reduce the size of transmitted data, faster loading times
     */
    compress: true,

    /** "open" open the browser when the server is successfully started
     */
    open: true,
  }
};