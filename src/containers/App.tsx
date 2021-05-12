import React from 'react';
import axios from 'axios';
import { API_URL } from 'core/constants';

const App = (): JSX.Element => {
  axios.get(`${API_URL}cities?offset=0&limit=100`).then(({ data }) => {
    console.log(data);
  });

  return (
    <>
      <h1>
        hello
      </h1>
    </>
  );
};

export default App;
