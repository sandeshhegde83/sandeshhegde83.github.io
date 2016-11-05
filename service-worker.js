var cacheName = 'Choice-PWA-Build-1-0-1';
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
    }).catch(function() {
      if(e.request.mode == 'navigate') {
        return caches.match('/offline.html');
      }
    })
  );
});

self.addEventListener('push', function(event) {
  console.log('Push message', event);

  var title = 'Hotel Searches by Choice';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'Click to view your hotel search information',
      icon: 'assets/choice-logo-128.png',
      tag: 'my-tag'
    }));
});

self.addEventListener('notificationclick', function(event) {
  console.log('Notification click: tag', event.notification.tag);
  // Android doesn't close the notification when you click it
  // See http://crbug.com/463146
  event.notification.close();
  var url = 'https://www.choicehotels.com/arizona/phoenix/hotels';
  // Check if there's already a tab open with this URL.
  // If yes: focus on the tab.
  // If no: open a tab with the URL.
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    })
      .then(function(windowClients) {
        console.log('WindowClients', windowClients);
        for (var i = 0; i < windowClients.length; i++) {
          var client = windowClients[i];
          console.log('WindowClient', client);
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});
