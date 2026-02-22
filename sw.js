const CACHE_NAME = 'flashcards-v1';
const ASSETS = [
  './',
  './index.html',
  './sw.js'
];

// Instalace a kešování souborů
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Obsluha požadavků (umožňuje offline provoz)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});