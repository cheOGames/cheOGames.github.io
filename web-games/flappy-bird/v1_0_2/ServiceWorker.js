const cacheName = "CooLGames-Flappy Bird-1.0.2";
const contentToCache = [
    "Build/81ed1880f4c4ef2eb6487d4721eb1107.loader.js",
    "Build/94ba72611b85815980da2bc6dafeb6b6.framework.js.unityweb",
    "Build/7dfd20697112cc633542a37a9fae6f81.data.unityweb",
    "Build/f5b309316a3ed521cbabfc59ebb4ebac.wasm.unityweb"
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
