/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b4d6e8e8966006e952990c5aa6614acd"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1c83c9b3.css",
    "revision": "ec35a0ebab070d37022a51d3fe660c46"
  },
  {
    "url": "assets/img/create-project.1af1af1c.png",
    "revision": "1af1af1c05a42af921932d6c88b9417d"
  },
  {
    "url": "assets/img/create-result.88889ccb.png",
    "revision": "88889ccb6323c7acc75627d932283b20"
  },
  {
    "url": "assets/img/delete-project.0009edad.png",
    "revision": "0009edad9c117476e471ba9468809d99"
  },
  {
    "url": "assets/img/delete-result.f65bf24e.png",
    "revision": "f65bf24e3787752ee5cf5942047c0fd0"
  },
  {
    "url": "assets/img/initial-delete.628260bf.png",
    "revision": "628260bff5e4b23ab3127896ef68a4ad"
  },
  {
    "url": "assets/img/projects-list.f631b505.png",
    "revision": "f631b50572734809758ff2639001249b"
  },
  {
    "url": "assets/img/read-project.97cc44ff.png",
    "revision": "97cc44ff345c696be8f68f5d52c6a85d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/server-console.f82432f1.png",
    "revision": "f82432f115931e6d45040790a4985e1a"
  },
  {
    "url": "assets/img/update-project.1e2c0f50.png",
    "revision": "1e2c0f50d8751b3637d64813c242ead6"
  },
  {
    "url": "assets/img/update-result.628260bf.png",
    "revision": "628260bff5e4b23ab3127896ef68a4ad"
  },
  {
    "url": "assets/js/10.a8add182.js",
    "revision": "857845108dd4c69ba72f4376fb7febf0"
  },
  {
    "url": "assets/js/11.c42a4868.js",
    "revision": "b201488a7d08a2bedb7391eb462563ad"
  },
  {
    "url": "assets/js/12.ab33ba97.js",
    "revision": "d49fb05fbf9d8a5463c4147a9d6d8fab"
  },
  {
    "url": "assets/js/13.edeea153.js",
    "revision": "e20bea44438adc02ea544da31e032be1"
  },
  {
    "url": "assets/js/14.9959258b.js",
    "revision": "116f317563da63d06201fce7bb25d79d"
  },
  {
    "url": "assets/js/15.919e8cda.js",
    "revision": "9525c078158caa013a318df21053fe8e"
  },
  {
    "url": "assets/js/16.c392084c.js",
    "revision": "78d8b6b18b892d926cfea3fe68322a88"
  },
  {
    "url": "assets/js/17.4281ee06.js",
    "revision": "276bdfbbfe62223c8d7372cf0a872e99"
  },
  {
    "url": "assets/js/18.d9e8b8b0.js",
    "revision": "8ac145d8da1be7b3efa28296d2b48daf"
  },
  {
    "url": "assets/js/19.3feb550f.js",
    "revision": "9a53f3f3265261dc6b957341dbb577cc"
  },
  {
    "url": "assets/js/2.42e74303.js",
    "revision": "207162d2c67ac5d0a7ba345092887303"
  },
  {
    "url": "assets/js/20.3a31b893.js",
    "revision": "a8789d196285c03d3e5b4c933ddde204"
  },
  {
    "url": "assets/js/21.b4152f3b.js",
    "revision": "49ee5ee2370570367a8a5377ef2fa5ea"
  },
  {
    "url": "assets/js/22.f71ef1fc.js",
    "revision": "7f671be9fd7cdd752aa4d51ebd6806d0"
  },
  {
    "url": "assets/js/23.da74e7a5.js",
    "revision": "291168ad3a3f806079f59bc3654c8daf"
  },
  {
    "url": "assets/js/24.3fd76869.js",
    "revision": "110d86dba0ecac16ef9d0c86ac9a3db7"
  },
  {
    "url": "assets/js/26.fe4d7493.js",
    "revision": "842691d6e23bbb7d1944b3593895dd7d"
  },
  {
    "url": "assets/js/3.19db975e.js",
    "revision": "974f4b5e82597e14ec3e5d4aee9d446c"
  },
  {
    "url": "assets/js/4.2268489a.js",
    "revision": "1f058f2680c059ed85f19c6ba1f716cd"
  },
  {
    "url": "assets/js/5.b5de2143.js",
    "revision": "172ed0d71abab06a2fe64b780b938dd2"
  },
  {
    "url": "assets/js/6.531a10dd.js",
    "revision": "61d0201e64f0d430d3139271983c0d1a"
  },
  {
    "url": "assets/js/7.d42bf5d5.js",
    "revision": "c168f7a275d52ca70ddb4201c016e85e"
  },
  {
    "url": "assets/js/8.4c5e89b2.js",
    "revision": "4ab2e1635cd5e4bf18606ae5b5d73d14"
  },
  {
    "url": "assets/js/9.c5f0dfb6.js",
    "revision": "dd9c40e457479b3413da46480dbc0d82"
  },
  {
    "url": "assets/js/app.e16b661c.js",
    "revision": "0225dd21b7fcfcfc48f38ef36e9e9585"
  },
  {
    "url": "conclusion/index.html",
    "revision": "15c3f1fc9cf947f80767ec9441021bc4"
  },
  {
    "url": "design/index.html",
    "revision": "9b9763dbb31bad2f0bdc6e34890fb741"
  },
  {
    "url": "index.html",
    "revision": "c72fe1ec0c2db22f76a064bf5564fedd"
  },
  {
    "url": "intro/index.html",
    "revision": "43fab41c97ae9adfccac85ab19085d00"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1b0ab2eea1549a72aa72fc385c070f85"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ca3b5f4b653137caa7ec1d6ec6ef63d1"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c3d80a6e005cd70574e2b634b81e978c"
  },
  {
    "url": "software/index.html",
    "revision": "9b647225df266b5ca1d68e5d06bd2b91"
  },
  {
    "url": "test/index.html",
    "revision": "c19af5d4d36f9783a4cafad541537ef4"
  },
  {
    "url": "use cases/index.html",
    "revision": "885fa17f6de78c1f48bc68e74ffb9ccc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
