import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from 'core/theme';
import ButtonComponent from 'components/Button/ButtonComponent';

// eslint-disable-next-line no-console
console.log('%c BALU WAS HERE', 'color: #FFFFFF; font-style: bold; background-color: #000000;padding: 20px');

const Root = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Typography variant="h1">
      HELLO WORLD
    </Typography>
    <ButtonComponent />
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
