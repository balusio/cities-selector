import React, { useState, ChangeEvent } from 'react';
import { InputAdornment, makeStyles, TextField } from '@material-ui/core';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import styles from './SearchBarStyles';

const useStyles = makeStyles(styles);

const SearchBar = () : JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const [typing, setTyping] = useState<boolean>(false);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setTyping(true);
    if (e.target.value !== value) {
      setValue(e.target.value);
    }
    if (e.target.value === '') {
      setTyping(false);
    }
  };

  return (
    <TextField
      className={classes.input}
      id="search-bar"
      value={value}
      variant="outlined"
      onChange={onChangeValue}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <LocationSearchingIcon 
              className={(typing ? `${classes.searchingAnimation}` : classes.findingIcon)} 
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
