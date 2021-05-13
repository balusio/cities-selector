import { useState, useEffect } from 'react';

type DataHookParams = {
  url: string;
  options?: RequestInit;
  noCache?: boolean;
};
/**
 * DataHook is a centralized hook that tries to get data from cacheAPI,
 * also is a centralized place to handle common HTTTP request
 * @param url url that you want to check
 * @param options RequestInit to modify or select data
 * TODO: set expire data to overwrite on cacheAPI to keep up to date data
 */
const GetDataHook = ({ url, options = {}, noCache = false }: DataHookParams) => {
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<Response | null>(null);
  const request = new Request(
    url,
    options,
  );
  const getcacheAPI = async () => {
    const cache = await caches.open('requestList');
    const responseCache = await cache.match(request);
    const { data } = await (await responseCache?.json());
    if (data && data.length > 0) {
      return data;
    }

    return false;
  };

  const apiCall = async () => {
    try {
      const cache = await caches.open('requestList');
      const queryResponse = await fetch(request);

      if (queryResponse?.ok && queryResponse?.status === 200) {
        const queryResult = await (await queryResponse.json());
        setResponse(queryResult.data);
        cache.put(request, queryResult);
        setIsLoading(false);
      }
    } catch {
      setError({
        name: 'dunno',
        message: 'error',
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const localData = getcacheAPI();
    if (localData) {
      localData.then((data) => {
        setIsLoading(false);
        setResponse(data);
      });
    } else {
      apiCall();
    }
  }, [url]);

  return {
    isLoading,
    response,
    error,
  };
};

export default GetDataHook;
