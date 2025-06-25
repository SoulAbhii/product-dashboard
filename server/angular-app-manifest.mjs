
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/product-dashboard/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/product-dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2506, hash: '75807761ea64eae89a51e11bc4f313fbb712f64e4308c1c313f30742cbd8e875', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2863, hash: 'b6e5cac7042ae10186b7f8f1e4eb7d6a4cfa9c5b7d783a2e2571fdf4953d1ac3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22768, hash: '1bebd289a2b24bbcd418649b1421bb0755343dd79d66e9f815185b8a6fbe826a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6O7SJDF3.css': {size: 31, hash: '/wdgZGTgrmI', text: () => import('./assets-chunks/styles-6O7SJDF3_css.mjs').then(m => m.default)}
  },
};
