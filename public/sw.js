if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const d=e=>n(e,t),r={module:{uri:t},exports:c,require:d};s[t]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1320-7a4d8966fa53b63e.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/1975-08a8545bd2ae4cd9.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/2186-a97a79471a4bb31a.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/2749-6efee037ca1cc4b4.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/3612-ea7b7c62a73c6ddc.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/423-6e07993653f46ec0.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/4874-911eb133db6f31dc.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/4927-22e587b76bbc1867.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/4961-a8ebbea53268caf9.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/5076-58f783d2691be85d.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/5206-dc5573bd67cd52e4.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/581-9a1a0d1e676030a9.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/5925-85ffda3a52dff41e.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/6359-f72835d0f2a6a1e0.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/6578-d9e98288df15b2cb.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/6643-c9829f9c74e11bbf.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/6757-0df861fc1f6fb3f7.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/702-77309601c53fe425.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/7180-60b8a6a093abe896.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/7217-5e3ea151eca96ad1.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/7673-c6d535f79cdd26f1.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/7781-aa7cc0dd386b9362.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/7809-8d022379a215e37d.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/842-35f39dd5e248a77c.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/8812-514ff9a1fc7e5fa9.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/8874-cd14014f26b0c501.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/9294-0399d0119e71b287.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/layout-876d8a9a229312f0.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/login/page-b60053b1ee4ec460.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/page-ea8c11741c404629.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/register/candidate/page-cd2ec6843e291631.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/register/company/page-654c3324f318e246.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/assignTest/page-b885afad12999cc8.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/candidate/page-6c289a406f10627b.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/candidateTest/%5Bid%5D/layout-6ad64e3f2bb9dca6.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/candidateTest/%5Bid%5D/page-7c0438b66013a19d.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/candidateTest/page-9570ec74b622bbe3.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/layout-e79cabce1dfce4e1.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/page-00ebd3ba1cd7f4ec.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/project/layout-a0660b8da9048964.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/project/page-9dc31db3e77f75e3.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/questionsBank/page-37a7673d68c8c5c0.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/searchCandidate/page-5f02ff4b2339a4fd.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-15d82b759f9f3f1b.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-493780dd86be59ec.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/app/_not-found-e59a45694f76cb51.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/fd9d1056-a5828e66f2b4cf75.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/main-69ef38adb9e4398f.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/main-app-17ec167239a07075.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/pages/_app-7bb460e314c5f602.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/pages/_error-8aa332dfaf8ff0ba.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-46340eb66d0a37e0.js",revision:"j5I6NHTj9VXJbRngdqi85"},{url:"/_next/static/css/d9f61a3e2d10d359.css",revision:"d9f61a3e2d10d359"},{url:"/_next/static/j5I6NHTj9VXJbRngdqi85/_buildManifest.js",revision:"75740cacd3ef418c900cdf5afc2f6581"},{url:"/_next/static/j5I6NHTj9VXJbRngdqi85/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.p.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
