const cleanCache = (url: string, cacheVersion: string) => {
  caches.open(cacheVersion).then((cache) => {
    cache.delete(url).then((response) => {
      console.log('deleted', response);
    });
  });
};

export default cleanCache;
