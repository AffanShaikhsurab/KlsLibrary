'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "ab92aa92089a90a9663c649a7cda3b68",
"assets/AssetManifest.bin.json": "afb1a84e76bc6359e55dab6f2d2c78fa",
"assets/AssetManifest.json": "31e041813a366706b42fadc626330a3b",
"assets/assets/Arrow.png": "d758439c5f8cf748963309e63b8fd367",
"assets/assets/arrowvector.svg": "ee2606199567ac413614a23b1e009ad4",
"assets/assets/background.png": "d0690351379f870276cf2b96cf03c4db",
"assets/assets/blackBook.png": "1cc799b47081e6d49e050d205575a6f9",
"assets/assets/circle1top.svg": "8ae4de899a8b25570788aac073ecfa52",
"assets/assets/images/basil_other-1-outline.svg": "083b251d64eb1fc5df0b6f0e9afa3d80",
"assets/assets/images/Vector.svg": "589b5f281b1ee7e10337818f18e06f0a",
"assets/assets/library_loading.json": "e87557216cef6bb9441bae82e9942356",
"assets/assets/library_loading1.json": "f7312fb722820164562c7a4489d70336",
"assets/assets/loading_file.json": "429e18c0dcb142831b3a3834f2a2c663",
"assets/assets/Logo.png": "d6fd1c1875441b314f179d11da4f65d3",
"assets/assets/Onboarding/Discover.png": "c3b2a8cd5981779705bac1267082aa6e",
"assets/assets/Onboarding/Organize.png": "fe08d40dc899cc1c5bf2e04596fd31ce",
"assets/assets/Onboarding/Search.png": "97c1b95f2594300bf5c4d1ee86a3fd6c",
"assets/assets/page-1/images/arrow-1.png": "0fd9ab88f1d9090e9c9182f2380de0b9",
"assets/assets/page-1/images/arrow-2.png": "0fd9ab88f1d9090e9c9182f2380de0b9",
"assets/assets/page-1/images/ellipse-10.png": "7aaa760a9d788f7750bddeda417852f5",
"assets/assets/page-1/images/group-3.png": "32f24bc9b5715d0d8f6986b342f7d207",
"assets/assets/page-1/images/icon-mail.png": "c37e5f7f31b2d67f3f82592bb1b242bc",
"assets/assets/page-1/images/icon-phone.png": "98153aee95169662125deaaf26c0de4b",
"assets/assets/page-1/images/icon-user-zRf.png": "a2c5736948de31b7b01e76e58e1cea8d",
"assets/assets/page-1/images/icon-user.png": "a2c5736948de31b7b01e76e58e1cea8d",
"assets/assets/page-1/images/language-circle.png": "e35ea0fd580eac22d9ff9f55e8bdb80d",
"assets/assets/page-1/images/pay-1.png": "e5d6fcb2daf5fc921a725689fcb215d8",
"assets/assets/page-1/images/pay-2.png": "e5d6fcb2daf5fc921a725689fcb215d8",
"assets/assets/page-1/images/pay-3.png": "e5d6fcb2daf5fc921a725689fcb215d8",
"assets/assets/page-1/images/pay-4.png": "e5d6fcb2daf5fc921a725689fcb215d8",
"assets/assets/page-1/images/replace-this-bg.png": "0ae71141f73bd846519d0354c010064b",
"assets/assets/page-1/images/star.png": "e07fbbb117c53622d2e3a7412e08adc9",
"assets/assets/page-1/images/vector-qbo.png": "68cd13e405183cdc27597c875ef0786b",
"assets/assets/page-1/images/vector.png": "68cd13e405183cdc27597c875ef0786b",
"assets/assets/profile.png": "86069989375a7a5ac30a3631237f259a",
"assets/assets/r.png": "360e631733fc2c68a4c9d819bd756267",
"assets/assets/rupees.png": "ca754ed166aee16764da45cc81630867",
"assets/assets/search.png": "0f77e532bf8ecf246d176700b248538c",
"assets/assets/Texture.jpg": "7ab120409399a845822188f2c46aa341",
"assets/assets/vectortop.svg": "c53f25ea7a32dc648f2a6efd2d71f061",
"assets/FontManifest.json": "cdfebef369f08964a3e04f590548704e",
"assets/fonts/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/fonts/MaterialIcons-Regular.otf": "1bfee31c4d16b789be8d3a538ba92d8b",
"assets/NOTICES": "5f27bad2c80c29042728032cf7c11043",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-debug.log": "4a2b44dec704882ecf877a4a9aea8890",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0f30a537d846d54de39d6399dbfd491",
"/": "e0f30a537d846d54de39d6399dbfd491",
"main.dart.js": "b28003dd1f85c820bea5a0bd20f95cd1",
"manifest.json": "ba8f76303d520b5dfce7080be7d4a638",
"splash/img/dark-1x.png": "6b97223bff9eb6eb6de3d24a1e4b27d5",
"splash/img/dark-2x.png": "bb171581fd56b7bfff391364be2e1900",
"splash/img/dark-3x.png": "421b932a4f60af4e9d876514f59fffec",
"splash/img/dark-4x.png": "226d738586c4706d13931bc60d87d3d3",
"splash/img/light-1x.png": "6b97223bff9eb6eb6de3d24a1e4b27d5",
"splash/img/light-2x.png": "bb171581fd56b7bfff391364be2e1900",
"splash/img/light-3x.png": "421b932a4f60af4e9d876514f59fffec",
"splash/img/light-4x.png": "226d738586c4706d13931bc60d87d3d3",
"version.json": "9d90352d3675d36099a3f6eabc061223"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
