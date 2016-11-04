var cacheName = 'Choice-PWA-Build-1-0';
var filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/assets/font.css',
  '/assets/choice-hotels.css',
  '/assets/ch-logo.png',
  '/assets/vr-logo.png',
  '/assets/cp-logo-small.png',
  '/assets/offline3.png',
  '/assets/google-play.png',
  '/assets/ch-vendor-b9274ffaa5a42bd0f05c.js',
  '/assets/ch-app.js',
  '/assets/app-store.png',
  '/assets/amazon.png',
  '/assets/Open_Sans_300.woff',
  '/assets/Open_Sans_400.woff',
  '/assets/Open_Sans_700.woff'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
