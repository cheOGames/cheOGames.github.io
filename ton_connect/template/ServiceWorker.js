const cacheName = "cheOGame-tonconnectunity-template-1.0.1";
const contentToCache = [
    "Build/4bbd5338d1cb3883ed4449afc1e1577c.loader.js",
    "Build/5e9e0972651269a163002e1e7146e4b9.framework.js.unityweb",
    "Build/c3dc33b74c834805b3fedea10901aa7b.data.unityweb",
    "Build/6f24c60ee04fb03fdd0d36f9985a684c.wasm.unityweb",
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
