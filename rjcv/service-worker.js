/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./index.html","b65ae7e2824736c2ebc10fad9d0f4094"],["./static/css/app.925def81c6590ca1f45c5df3bdb6fd33.css","8c2d54c1f1cdfc882ba0d67d1758a612"],["./static/css/app.925def81c6590ca1f45c5df3bdb6fd33.css.map","59e7994665deb8fefd8609160ba41865"],["./static/favicon.ico","4efaa5f78730c1c3443dd8b5251cc982"],["./static/icon.png","819d332c24a42704439ca7bed0649ddf"],["./static/img/iconfont.d1325d2.svg","d1325d2d87717ec70fa4d054f74c3e63"],["./static/img/product.a5b940f.png","a5b940f3cd4a7ee0fc82afb32c9768c3"],["./static/js/1.60ed194c42c9c9c7a3be.js","9bb90e6b20869c939c955b4db29af0af"],["./static/js/1.60ed194c42c9c9c7a3be.js.map","0710e2f0ab53853d383b5e741070440b"],["./static/js/10.f47b8bf5b113b6242477.js","d111b8b09594860e87325898e5c690e1"],["./static/js/10.f47b8bf5b113b6242477.js.map","baaa99561deeb49463ee032536030120"],["./static/js/11.c11fb395090cacaf8726.js","f16d4b5ab9ff4a8818a339ad5875315a"],["./static/js/11.c11fb395090cacaf8726.js.map","ae3776c8aeccedb86d9e4fdea4093c56"],["./static/js/12.043e9dc10a308a0597b2.js","0c954aa53236d3539094bce50cd84f5a"],["./static/js/12.043e9dc10a308a0597b2.js.map","b0b2a44ed4a92e8248bbbe1d49ece58f"],["./static/js/13.05cab9f3d576ea6026cb.js","886120453548961e6644c6f893367725"],["./static/js/13.05cab9f3d576ea6026cb.js.map","3c3862f1635fc73d1be9a9b4eb32a729"],["./static/js/14.4dda898f001f9b33a057.js","2035c33ac82a50c95a7c27c6d0bd992e"],["./static/js/14.4dda898f001f9b33a057.js.map","7f0311d14511d5919ec1128fbf169f3e"],["./static/js/15.c3d7f173ff6d987bab0e.js","27f68400af2d9296f5c4d2fd6d724e92"],["./static/js/15.c3d7f173ff6d987bab0e.js.map","248120155260524fa1053e46aaf24dbc"],["./static/js/16.61f6883b5e126a9fb128.js","730bcd540166f3da7f47b480e72c5895"],["./static/js/16.61f6883b5e126a9fb128.js.map","f1d41128d0b57ff9c1f0bfb6129477ea"],["./static/js/17.1e57670eecd6ef8f744e.js","b80673ed6f20410944cfa7499ab7777b"],["./static/js/17.1e57670eecd6ef8f744e.js.map","287c54515c318bafee1c85681603f155"],["./static/js/18.2a52e615573990e4f686.js","4f2be621596a16280dfe108a9736a6c9"],["./static/js/18.2a52e615573990e4f686.js.map","79918b39c7d0ab68384d3fe71aae5d27"],["./static/js/19.c23caf489ac6cb34fc30.js","f33505fe5146389588e20c6d2cc7ffa5"],["./static/js/19.c23caf489ac6cb34fc30.js.map","d3bed572005beb1ad13debcef24de9ef"],["./static/js/2.d85d1618488096686311.js","548cd88c407b11c6adc369da415d864e"],["./static/js/2.d85d1618488096686311.js.map","5f4f4d781051684e8dec7b2fc65e0f10"],["./static/js/20.55960aecc52929c1bfd7.js","81d7d2038ddb9afe1aa7cb8462295077"],["./static/js/20.55960aecc52929c1bfd7.js.map","6a580ea2df1ce77d5310d74fcf58e523"],["./static/js/21.a3bcdad34401a3fba0db.js","5c15876b82db1909df01e842c5962c99"],["./static/js/21.a3bcdad34401a3fba0db.js.map","96349e32b0510ae3581fa11a40472b31"],["./static/js/22.bf9e8e5fe36b2d74c163.js","d568504315cee205b66c2f22c987bccf"],["./static/js/22.bf9e8e5fe36b2d74c163.js.map","a207b885a581157cd77364e060df8af5"],["./static/js/23.439d33882369f362eb65.js","0ee11c67c0d76aa3ec05a06d8b5dc268"],["./static/js/23.439d33882369f362eb65.js.map","c4e03d5eaf87e9442070940e05f6943d"],["./static/js/24.479196cf84f53abf5eb8.js","5d9c1dec348e36c50abeaac1fadeb205"],["./static/js/24.479196cf84f53abf5eb8.js.map","ecc809433f44c59f4224d2ede08a5909"],["./static/js/25.41730e7acd1c21526686.js","289ae0a74be53cfbec12c8b83e1d7fe0"],["./static/js/25.41730e7acd1c21526686.js.map","78445f62b0063fc72729d41244b29264"],["./static/js/26.96b733ad19d4f02ab668.js","1966d9c2ab8e40a8bb8d8c0113b5ed61"],["./static/js/26.96b733ad19d4f02ab668.js.map","96d9c381aeaf044988843b61006f82de"],["./static/js/27.ae04a6c96b928b31a92e.js","27a1aafa16edae24d5f9a1373cfceda7"],["./static/js/27.ae04a6c96b928b31a92e.js.map","bd3b7a660cb0069be44f83985b634ce8"],["./static/js/28.0169a3b3e2b78fccd1c6.js","c5f92fe7d03f224cf04e97762b817ce0"],["./static/js/28.0169a3b3e2b78fccd1c6.js.map","10848263e83186f5aed1ca5420c00782"],["./static/js/29.b627b50439603afe111f.js","4c991c1a7b8944f8bc8e52d6247e6fce"],["./static/js/29.b627b50439603afe111f.js.map","cf88741ab67d2f8d585c7a9f067ed010"],["./static/js/3.3bd0e244459f3f1056b0.js","335976e10c1126ac7d2f9ee4e459f386"],["./static/js/3.3bd0e244459f3f1056b0.js.map","c39d35f48e7282a61b371591a77279e8"],["./static/js/30.b231af74905d1e856e12.js","a0198afb1d25af3c37f93c157148dfd0"],["./static/js/30.b231af74905d1e856e12.js.map","e4f21b3fc7f54bfe9d240ad7f6c36f10"],["./static/js/31.ec9df54d50162eb46339.js","f6fde4be88dec766c5595b1305ebbe22"],["./static/js/31.ec9df54d50162eb46339.js.map","7ed3bda3933de76841733ed2e06799ab"],["./static/js/32.8151efc93c3815c18df7.js","d695f702015ab6d2c18e62e6599c46cd"],["./static/js/32.8151efc93c3815c18df7.js.map","4e98e5dc4474acc5931dba6ae808636c"],["./static/js/33.5ec6ada6272741538f51.js","7ecc7b67e34ba2414e34ffaef16ae948"],["./static/js/33.5ec6ada6272741538f51.js.map","375d80504beb4e78ec6bb7f24177ba4a"],["./static/js/34.57a26bffe7eb2159ff9b.js","a3bb2175d9c71d128615e8eeb2c10037"],["./static/js/34.57a26bffe7eb2159ff9b.js.map","31e8f2b949ab0530356e24a6b4445894"],["./static/js/35.274d90022f6a1499425b.js","bf1bc772bb04768cedf6c03c3cbf7d43"],["./static/js/35.274d90022f6a1499425b.js.map","3e7232d644ed495f1267452904805369"],["./static/js/36.cff9824c4897442531f3.js","4ae827c95376869e4d3c9389a07a292b"],["./static/js/36.cff9824c4897442531f3.js.map","8ac03b3faed09a617c1c7c3b7f6b66c0"],["./static/js/37.87306e8c8a1e62c3b725.js","d34466bb82adba356dd1feed36174bf9"],["./static/js/37.87306e8c8a1e62c3b725.js.map","66fbe97d09bbb2a8952dc371acfdc25d"],["./static/js/38.9bacfbafc09e9cbea424.js","447fa98f55911328bd30bde72d2a5789"],["./static/js/38.9bacfbafc09e9cbea424.js.map","4a2292e23b20cd15fa49797710cccfb2"],["./static/js/39.a6bc851b32a15f37914f.js","1c17d67b7369d67b899286d6a8af0206"],["./static/js/39.a6bc851b32a15f37914f.js.map","28a3ccdb507827113129b2e84ad3661c"],["./static/js/4.b9b4cb2d434421be1a87.js","58f6fb27ca128a33cacf86cc152d6150"],["./static/js/4.b9b4cb2d434421be1a87.js.map","b71b62e1936c65a3b6a77d5811e7a86b"],["./static/js/40.474b808700923fb3b8de.js","7b9ff13720cf165c898eafd2420db9b0"],["./static/js/40.474b808700923fb3b8de.js.map","cd4f88750c3788e5418938a8692dc8e5"],["./static/js/41.51087411c2272b5d6b65.js","a9ee282812bc0c2f9649cc865a41d8e7"],["./static/js/41.51087411c2272b5d6b65.js.map","a1d3256fd0206aad0ee555f6896e6c03"],["./static/js/42.c083c9a0753c0a40de8f.js","a4fb4e5cade08a5e7679942305282cbc"],["./static/js/42.c083c9a0753c0a40de8f.js.map","cfd7d6b7a1584fcf49fd52b783f60094"],["./static/js/43.00eb28f7090db809272b.js","431a1116fbf2460b2e27dabe257d4d02"],["./static/js/43.00eb28f7090db809272b.js.map","5583b389461aa4a533d8742ade576564"],["./static/js/44.3ae4a82bdb9308579216.js","6b4d5bb48eebc1b636501f0ed85df502"],["./static/js/44.3ae4a82bdb9308579216.js.map","591f3e76b4026743d62783bd5a80c1e4"],["./static/js/45.a5d3ec302499c97cbb8a.js","d05a5068133084243938fce6f8e13165"],["./static/js/45.a5d3ec302499c97cbb8a.js.map","a4b2989fe4cfd9eef0fa131e9b51edad"],["./static/js/46.09216d42ac15542bbb43.js","340b2aa9ec1f0645dbf2dd88c8bf98e7"],["./static/js/46.09216d42ac15542bbb43.js.map","c57c53b6d3c3f4d82611b6704e03b839"],["./static/js/49.d7b0ee3bf337480f9d6c.js","cf329dce71bb4472257b00a76d38a872"],["./static/js/49.d7b0ee3bf337480f9d6c.js.map","f49c0eef8c9c69c35d70049eac2cd367"],["./static/js/5.fb745d0fd24e61120f98.js","c53628f1bcaa235ad7d9de61cf784e99"],["./static/js/5.fb745d0fd24e61120f98.js.map","49430336240f3f6886ee9fe14f7051f5"],["./static/js/6.629efc076c60badd685a.js","ae6b538a42f0fdf30f0877b0d9c37423"],["./static/js/6.629efc076c60badd685a.js.map","f93c415ddbbbe7e8521c0f2845744738"],["./static/js/7.ae914c656215aaf6c5b2.js","c81ce6243bc8bd865aa266633f62631a"],["./static/js/7.ae914c656215aaf6c5b2.js.map","e25ce22eec0c964f9905668b3a75ad37"],["./static/js/8.b9d592a3b865ab7bf54d.js","5a6341cfeb62959f88f0ff72cd924227"],["./static/js/8.b9d592a3b865ab7bf54d.js.map","61c61b696f1d3b92472314a5c1723b36"],["./static/js/9.a622362d0ef4ea448966.js","860e01e467145016df39a7747316cce5"],["./static/js/9.a622362d0ef4ea448966.js.map","1a8021f8e075af0c7961d97f2de62a2f"],["./static/js/app.4f37d9facdd913632fe5.js","778698d61a9a9712a78ed52eb919669d"],["./static/js/app.4f37d9facdd913632fe5.js.map","eba847639968b20cc47164c2a7274bda"],["./static/js/manifest.ef92642d4ce72a96e925.js","83d5113749e219fec8662993a4507d99"],["./static/js/manifest.ef92642d4ce72a96e925.js.map","d68d55989644d33478d6d6b4a94cb843"],["./static/js/vendor-async.23bef43c12e84590e233.js","4a2ed5c72d83d27d92c01d1196a23628"],["./static/js/vendor-async.23bef43c12e84590e233.js.map","428a284c5703b1316b16e03f989dd845"],["./static/js/vendor.e5c2f415f72077e9683b.js","551a0b079ff150129a5c7d70dd232758"],["./static/js/vendor.e5c2f415f72077e9683b.js.map","0844c8ad4c82e58eb24670e10e4f6364"],["./static/manifest.json","db1644903dec4f49645010d31e79f356"]];
var cacheName = 'sw-precache-v3-rj-component-vue-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/(\.(png|jpe?g|gif|svg)|\.js|\.json)/, toolbox.networkFirst, {});




