'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "19164d43f14b98040923661a0571b59c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "1e55fb0c6dac6f98585baa92f90c2a55",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c187609ec1568851103ab677e04cfe7",
".git/logs/refs/heads/master": "3c187609ec1568851103ab677e04cfe7",
".git/logs/refs/remotes/origin/master": "1f3be3ab3cc6d4a4f56dd007b973c3c2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/f8fc69643b678c349cb6de0ebebb6f880167b0": "928f12c9af14d651820de5afea469e44",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/34/dc50a82559db24ed7f37c276bcf970e17a0bc8": "9dc1c6dca0f55b8e6843342ac0b5bb3d",
".git/objects/3b/ffbe830383794762cf44d5f4c64fd6bc07031a": "4d1510fcfa7e1467c75bfd36dc762598",
".git/objects/3c/8a157278c39821092e18d084be62db6f78538b": "5803267248338f9ef20c20e96ea85f69",
".git/objects/45/8ca36af30502c13969134f5ab7fcd3b13f38d8": "86869df29e850d06352571e3c21425b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/d17b8cde451b898160d94a04e87f32df6cb189": "39683b26346371377619fbbd8847cf9a",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/58/74bdce3e2cb99b179c7f4e9e96640e7b58c7b1": "4d592c85911a9cf25a07a3aa888c9eb7",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/6d/4ea2a394e243811d929db5d9943156c1ecdf4e": "faf188100b45d07622c839499d7d8e40",
".git/objects/75/491de2edd64be6fc611b38e849dbf974dff84f": "494bc5463c5d36097bc7b7fcfc7ec450",
".git/objects/79/23017c606df749a6de5f38501c5eaff4ea134a": "585752a7c7b149639de67901f1b5f71c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e164884425b767fdc06875b2261e351f0eef2e": "afd27e9286285fb1b8ff46a96bf8f876",
".git/objects/92/aa66c3273b00d299cb873de36e9dbb93ced8b9": "c808d8cb56cecb3561dd170623c90f1c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/6bc51eaba7a9ebb9f358d609277ed94f0e9955": "8d97929784f29d1bcf23cc9fcd748a7d",
".git/objects/a8/0ca7f5c1ef270df208eb51fe3528f8a00d24e9": "47c50737c6fd359481cf3bd634c14a12",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/cc81393f4a121ef04ea6b4c9066958584cab33": "e4e8a8b94d0083d361596d25d60b1290",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5e436b3c705f7b3e4c4729307aff472011a1ee": "b2deb6ece361c2180391233328fd16d1",
".git/objects/bd/1acfa5368019ca8a94a10d12a471bca89fd36b": "5ee8c764bf83a19b1caf5edec4d7d226",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c7/80906dfe6b414647c8f9de30198a406c9f38b8": "56ae33f42737785f3c65857b8547a076",
".git/objects/cc/035c95c96d314476d4112fe07d594a32769418": "ca151cfdb50b2b2eb9c24290dd7dcfa4",
".git/objects/d2/9ececdcb73f0352497ec399eef61ad6e413ba7": "a038314209d3cc61f9d4ae956a1027ed",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/e8927aafeb5d7cb0c31b6b36a6635c9c3439df": "6ad445b78439cb1f667187fe6dc3d983",
".git/objects/e0/f63b112aadaae017226e9ad32da268f53801f5": "f7a6431d7d9933a079d7bd004da56e84",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/fe43c82c8a76e699903aa93a61cfe038b6c0b7": "149cb51d48707101ab2fc9e600c845b9",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/f8/5b91b8b89969c39f95db538c16761732208a2a": "800634cf977b10ac092e696b3cb7a19e",
".git/objects/fa/5eedf1bfe18ff74996db25ccc5cbc78fe3ac23": "ebf8341964807ab185e062bd1922913d",
".git/objects/fd/4bc434bfba1d8aed9d95333cc4b673725e40ec": "e53e4b401e376b6ad859ebae20be06aa",
".git/refs/heads/master": "9510ab6955626f098e8d3732f075bce0",
".git/refs/remotes/origin/master": "4789f7853e124f094aeb4cdbe9418e93",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "af57c8bcdfe5b66d19bf545f1e44ecfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bb5d6057a82deac3c067eda9022e3c45",
"/": "926687c879d64a26cb359917940fb17d",
"main.dart.js": "01f7f81e257effdf863ffbe99720c0d2",
"manifest.json": "1f85e0a2b77dbd249393d77ddde2c3f8",
"version.json": "20c63961510dea11143d4f9a62d42fef",
"web-app/.dart_tool/package_config.json": "4cd1e334938a567ffa4b42101df601d3",
"web-app/analysis_options.yaml": "4b0d64ad067e016bc28e60dfadff5e39",
"web-app/CHANGELOG.md": "19d0dec99e75de01080e55f1dc6bb9d5",
"web-app/pubspec.lock": "ae688fb9c8b63160b1fbace0bd671dd4",
"web-app/pubspec.yaml": "85803d0ecea57c6405ee99a499ec6fb8",
"web-app/README.md": "034d7efb63acccc716505976c60cff23",
"web-app/web/index.html": "926687c879d64a26cb359917940fb17d",
"web-app/web/main.dart": "98a8be0b277fdcfaa6ed6cfed74eb149",
"web-app/web/styles.css": "6464ffd83e0e9cf564bfeb0fec2dcbda"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
