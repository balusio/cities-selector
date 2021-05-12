import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from 'core/theme';
import App from 'containers/App';
import { API_URL } from 'core/constants';

// eslint-disable-next-line no-console
console.log('%c BALU WAS HERE', 'color: #FFFFFF; font-style: bold; background-color: #000000;padding: 20px');

const Root = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
