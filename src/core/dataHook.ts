import { useState, useEffect } from 'react';
import { ApiResponse } from 'types/index';

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
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const cacheVersion = 'requestList-v1';
  const request = new Request(
    url,
    options,
  );
  const getcacheAPI = async () => {
    const cache = await caches.open(cacheVersion);
    const responseCache = await cache.match(request);
    if (responseCache) {
      const { data } = await (await responseCache?.json());
      if (data && data.length > 0) {
        return data;
      }
    }

    return false;
  };

  const apiCall = async () => {
    try {
      const cache = await caches.open(cacheVersion);
      const queryResponse = await fetch(request);
      if (queryResponse?.ok && queryResponse?.status === 200) {
        const queryResult = await (await queryResponse.clone().json());
        setResponse(queryResult.data);
        setIsLoading(false);
        cache.put(request, queryResponse);
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
    const getData = async () => {
      const localData = await getcacheAPI();
      if (localData) {
        setIsLoading(false);
        setResponse(localData);
      } else {
        apiCall();
      }
    };
    getData();
  }, [url]);

  return {
    isLoading,
    response,
    error,
  };
};

export default GetDataHook;
