
export default {
  basePath: 'https://soulabhii.github.io/product-dashboard',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
