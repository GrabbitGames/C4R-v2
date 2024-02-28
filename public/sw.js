importScripts("/public/uv/uv.bundle.js");
importScripts("/public/uv/uv.config.js");
importScripts("/public/uv/uv.sw.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
