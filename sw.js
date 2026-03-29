const CACHE_NAME = 'idiot-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/mus_zz_megalovania.ogg',
  '/manifest.json'
];

// Dosyaları önbelleğe al
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Çevrimdışı desteği sun
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

