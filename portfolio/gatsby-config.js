module.exports = {
  plugins: [{ resolve: `gatsby-theme-minimal`, options: {} },
  {
    resolve: 'gatsby-plugin-sass',options: {}
  },
  {
    resolve: 'gatsby-plugin-breakpoints',options: {}
  },

  {
    resolve: "gatsby-plugin-polyfill-io",
    options: {
    features: [
    "Array.from",
    "Array.prototype.find",
    "Array.prototype.filter",
    "Array.prototype.findIndex",
    "default",
    "Date.prototype.toISOString",
    "es5",
    "es6",
    "fetch",
    "Object.assign",
    "Math.trunc",
    "Math.sign",
    "Promise",
    "String.prototype.repeat",
    "Symbol",
    "window.fetch"
    ],
    start_url: `/`
    }
  }

],
pathPrefix: `/`,
}
