const CACHE_NAME = "offline-calculator-v1";
const assetsToCache = [
    "/",
    "/index.html",
    "/js/math.min.js",
    "/js/script.js",
    "style.css"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache);
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
