import React, { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from 'core/constants';
import { Button } from '@material-ui/core';
import GetDataHook from 'core/dataHook';
import cleanCache from 'utils/cleanCache';

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
