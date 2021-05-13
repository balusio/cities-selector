import React, { useEffect } from 'react';
import { API_URL } from 'core/constants';
import { makeStyles, Typography } from '@material-ui/core';
import GetDataHook from 'core/dataHook';
import ExploreIcon from '@material-ui/icons/Explore';

import styles from './AppStyles';

const url = `${API_URL}cities?offset=0&limit=100`;
const useStyles = makeStyles(styles);

const App = (): JSX.Element => {
  const { isLoading, response, error } = GetDataHook({ url });
  const classes = useStyles();
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
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <Typography variant="h3">
          Cities finder  <ExploreIcon fontSize="large" />
        </Typography>
      </div>
      {/* <SearchBar onValueChange={onValueChange} />
      <List /> */}
    </div>
  );
};

export default App;
