var plugins = [{
      plugin: require('C:/Sites/idlehoursco/frontend/version09_midway/midway/web/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Sites/idlehoursco/frontend/version09_midway/midway/web/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon/apple-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"6a7d1b1e98fea03b2de4ea155540f8fc"},
    },{
      plugin: require('C:/Sites/idlehoursco/frontend/version09_midway/midway/web/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"layout":"C:\\Sites\\idlehoursco\\frontend\\version09_midway\\midway\\web\\src\\layouts\\index.tsx"},
    },{
      plugin: require('C:/Sites/idlehoursco/frontend/version09_midway/midway/web/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"606gh0hy","dataset":"production","token":"skDuYGvAAhsRReDhwzKoDZRyfuOtMqNb3TRfuF9Wn9NkCfkkSJEjezsrfuJI8sSRKu2HZ65szG9xRhssCGUZmxrWTpcs567Cv9rpFPNoPL1d5lA9t3eQ6J6JVww40Pt6BDlpcWuQZGtU7BGXMq7X7R56Trrf8Pd5dWY174yiZhjQll7vbWfA","watchMode":true},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
