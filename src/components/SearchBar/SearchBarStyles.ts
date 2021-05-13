import { createStyles, Theme, StyleRules } from '@material-ui/core/styles';

const SearchBarStyles = (theme: Theme): StyleRules => createStyles({
  '@keyframes searchAnim': {
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
  input: {
    width: '100%',
    margin: theme.spacing(1, 0),
  },
  findingIcon: {
    opacity: 0,
  },
  searchingAnimation: {
    opacity: 1,
    animation: '$searchAnim 1s ease infinite',
  },

});

export default SearchBarStyles;
