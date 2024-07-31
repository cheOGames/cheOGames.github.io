const cacheName = "CooLGames-Flappy Bird-1.1";
const contentToCache = [
    "Build/e42bab4992f9cf34ab94929791cd8280.loader.js",
    "Build/5c374e611ef631a59ccfaaef062c21bc.framework.js",
    "Build/f4848149b2d38c5691abfae88dd982f6.data",
    "Build/f892cd796b0fe7e5a874008191ebb716.wasm",
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
