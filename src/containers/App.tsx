import React, { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from 'core/constants';
import { Button } from '@material-ui/core';
import GetDataHook from 'core/dataHook';

const url = `${API_URL}cities?offset=0&limit=100`;

const App = (): JSX.Element => {
  const { isLoading, response, error } = GetDataHook({ url });
  if (isLoading) {
    console.log('loading');
  }

  if (error) {
    console.error('ERROR, ', error);
  }

  useEffect(() => {
    console.log(response);
  }, [response]);

  // const onClick = async () => {
  //   let cachedData;
  //   const cache = await caches.open('requestList');
  //   const matchedCache = await cache.match(testUrl);
  //   if (matchedCache) {
  //     console.log('data exist');
  //     cachedData = await matchedCache.json();
  //     console.log(cachedData);
  //   } else {
  //     const response = await (await fetch(testUrl)).json();

  //     if (response.status === 200) {
  //       cache.put(`${API_URL}cities?offset=0&limit=100`, response.clone());
  //       const { data } = response;
  //       cachedData = await data;
  //       console.log(cachedData);
  //     }
  //   }
  //   // console.log('cachedData', cachedData);
  // };

  return (
    <>
      <h1>
        hello
      </h1>
      <Button>
        test
      </Button>
    </>
  );
};

export default App;
