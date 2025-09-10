// Service Worker

self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activado');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // No-op, just to make it a valid PWA service worker
});


self.addEventListener('push', (event) => {
  console.log('Service Worker: Notificación Push Recibida');
  
  const pushData = event.data.json();

  const title = pushData.title;
  const options = {
    body: pushData.body,
    icon: '/images/icon-192x192.png',
    badge: '/images/icon-192x192.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
