import { createStyles, Theme, StyleRules } from '@material-ui/core/styles';

const CitiesList = (theme: Theme): StyleRules => createStyles({
  ListContainer: {
    maxHeight: '200px',
    overflow: 'scroll',
  },
});

export default CitiesList;
