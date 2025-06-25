
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://soulabhii.github.io/product-dashboard/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/product-dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2533, hash: 'c10542fad621cf9247dd0d216e1b552894fa2f7ceb3070cfffa5791ec2155137', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2890, hash: 'cceedcc343156e1ead02a309ae2c0abb95af89e64a741622d684070455e6ace4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22795, hash: 'c729fded3666fdb8586321c9a00b8fed94e0998040a352ffb9625f8f8eb8f49e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6O7SJDF3.css': {size: 31, hash: '/wdgZGTgrmI', text: () => import('./assets-chunks/styles-6O7SJDF3_css.mjs').then(m => m.default)}
  },
};
