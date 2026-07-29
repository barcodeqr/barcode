// 最低限のService Worker定義（AndroidにPWA認識させるために必須）
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // 通常のリクエスト処理
  e.respondWith(fetch(e.request));
});
