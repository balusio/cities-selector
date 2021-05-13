/**
 * classe to mock cacheStorage on JEST env 
 * @see https://github.com/zackargyle/service-workers/blob/526ee36ece5a761dfaa0464442f3ad6d9da56f8c/packages/service-worker-mock/models/CacheStorage.js
 */

// https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
const Cache = require('./Cache');

class CacheStorage {
  constructor() {
    this.caches = {};
  }

  async match(request, options = {}) {
    const url = request.url || request;

    if (options.cacheName) {
      const cache = await this.open(options.cacheName);
      return cache.match(request);
    }

    const keys = Object.keys(this.caches);
    for (let i = 0; i < keys.length; i += 1) {
      const cache = this.caches[keys[i]];
      if (cache.store.has(url)) {
        return cache.match(request);
      }
    }
    return null;
  }

  has(cacheName) {
    return Promise.resolve(this.caches.hasOwnProperty(cacheName));
  }

  open(name) {
    if (!this.caches[name]) {
      this.caches[name] = new Cache();
    }
    return Promise.resolve(this.caches[name]);
  }

  delete(cacheName) {
    if (this.caches.hasOwnProperty(cacheName)) {
      delete this.caches[cacheName];
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  keys() {
    return Promise.resolve(Object.keys(this.caches));
  }

  snapshot() {
    return Object.keys(this.caches).reduce((obj, key) => {
      obj[key] = this.caches[key].snapshot();
      return obj;
    }, {});
  }

  reset() {
    this.caches = {};
  }
}

module.exports = CacheStorage;
