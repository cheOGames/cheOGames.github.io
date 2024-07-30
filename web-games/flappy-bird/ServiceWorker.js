const cacheName = "DefaultCompany-Flappy Bird-1.0";
const contentToCache = [
    "Build/8ab9ea5c57b025fcd3e9d5441afd0760.loader.js",
    "Build/b64817455caeeb324f09e8e2ae41872a.framework.js.unityweb",
    "Build/71ae6bac91bd2e5c1f0d4f12d0ce5998.data.unityweb",
    "Build/fe21a0c01d50ddb7175ad2b909b36827.wasm.unityweb",
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
