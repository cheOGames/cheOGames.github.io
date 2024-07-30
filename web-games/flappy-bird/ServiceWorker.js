const cacheName = "DefaultCompany-Flappy Bird-1.0";
const contentToCache = [
    "Build/b9348c036c89f396f7df387e75df23b9.loader.js",
    "Build/c29e844057825e6cc995a5e168ae1a6b.framework.js.unityweb",
    "Build/5136a1f5f9833ad2ee5568b3245b4c88.data.unityweb",
    "Build/d8269de20616ac9ee09c1f27a22cc84c.wasm.unityweb",
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
