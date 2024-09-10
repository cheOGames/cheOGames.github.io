const cacheName = "CooLGames-Flappy Bird-1.0.3";
const contentToCache = [
    "Build/81ed1880f4c4ef2eb6487d4721eb1107.loader.js",
    "Build/5bde8e951c748fc5029f81f510381ac2.framework.js.unityweb",
    "Build/0c862f6cc8d52f6d7544705f30a5e024.data.unityweb",
    "Build/0eb3d0e376f6deef1514e22413a2163b.wasm.unityweb"
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
