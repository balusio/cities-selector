import React from 'react';
import axios from 'axios';
import { API_URL } from 'core/constants';
import { Button } from '@material-ui/core';

const testUrl = `${API_URL}cities?offset=0&limit=100`;

const App = (): JSX.Element => {
  const onClick = async () => {
    let cachedData;
    const cache = await caches.open('requestList');
    const matchedCache = await cache.match(testUrl);
    if (matchedCache) {
      console.log('data exist');
      cachedData = await matchedCache.json();
      console.log(cachedData);
    } else {
      const response: Response = await fetch(testUrl);

      if (response.status === 200) {
        cache.put(`${API_URL}cities?offset=0&limit=100`, response.clone());
        const { data } = await response.json();
        cachedData = await data;
        console.log(cachedData);
      }
    }
    // console.log('cachedData', cachedData);
  };

  return (
    <>
      <h1>
        hello
      </h1>
      <Button onClick={onClick}>
        test
      </Button>
    </>
  );
};

export default App;
