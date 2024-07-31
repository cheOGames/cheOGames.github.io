const cacheName = "CooLGames-Flappy Bird-1.1";
const contentToCache = [
    "Build/cf7157739665b5fd1c6385a5ba1191c9.loader.js",
    "Build/5c374e611ef631a59ccfaaef062c21bc.framework.js.unityweb",
    "Build/4cf2e5085090093a298d92db7ff9c83e.data.unityweb",
    "Build/f892cd796b0fe7e5a874008191ebb716.wasm.unityweb",
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
