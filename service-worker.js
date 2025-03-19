const CACHE_NAME = "calculator-v1";
const ASSETS_TO_CACHE = [
    "/calculator-app/",
    "/calculator-app/index.html",
    "/calculator-app/js/script.js",
    "/calculator-app/css/style.css",
    "/calculator-app/icon.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
