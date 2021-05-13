import React, { useState } from 'react';
import {
  List, ListItem, makeStyles, Typography,
} from '@material-ui/core';
import { CityInfo } from 'types';

import styles from './CitiesListStyles';

interface CitiesListProps {
  cities: CityInfo[]
}
const useStyles = makeStyles(styles);

const CitiesList = ({ cities }: CitiesListProps) : JSX.Element => {
  const classes = useStyles();

  return (
    <List className={classes.ListContainer}>
      { cities.map(({
        geonameid,
        name,
        country,
        subcountry,
      }) => (
        <ListItem key={geonameid}>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="subtitle2">{country}</Typography>
          {subcountry && (
          <Typography variant="body2">
            {subcountry}
          </Typography>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default CitiesList;
