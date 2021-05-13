import React, { useEffect, useState } from 'react';
import { API_URL } from 'core/constants';
import { makeStyles, Typography } from '@material-ui/core';
import GetDataHook from 'core/dataHook';
import ExploreIcon from '@material-ui/icons/Explore';
import SearchBar from 'components/SearchBar/SearchBar';

import styles from './AppStyles';
import CitiesList from 'components/CitiesList/CitiesList';
import { CityInfo } from 'types';

const url = `${API_URL}cities?offset=0&limit=100`;
const useStyles = makeStyles(styles);

const App = (): JSX.Element => {
  const [cities, setCities] = useState<CityInfo[]>([]);

  const { isLoading, response, error } = GetDataHook({ url });
  const classes = useStyles();
  if (isLoading) {
    console.log('loading');
  }

  if (error) {
    console.error('ERROR, ', error);
  }

  useEffect(() => {
    if (response?.data) {
      setCities(response?.data);
    }
  }, [response]);

  return (
    <div className={classes.container}>
      <div className={classes.searchContainer}>
        <Typography variant="h3">
          Cities finder  <ExploreIcon fontSize="large" />
        </Typography>
        <SearchBar />
        <CitiesList cities={cities} />
      </div>

    </div>
  );
};

export default App;
