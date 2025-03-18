const cacheName = "cheOGame-tonconnectunity-template-1.0.1";
const contentToCache = [
    "Build/ebfece34d1fc7ed4120823e107726630.loader.js",
    "Build/39315f4a8fd72e0da54e7b4129d49f37.framework.js.br",
    "Build/41e6348e2b8f4e8a0cf3c5d3e3a86f52.data.br",
    "Build/3ef04046836dd7342eecc3c249e7cf8a.wasm.br",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
