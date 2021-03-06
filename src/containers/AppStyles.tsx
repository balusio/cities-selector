import { createStyles, StyleRules } from '@material-ui/core/styles';

const AppStyles = (): StyleRules => createStyles({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
  },
  searchContainer: {
    width: '100%',
    maxWidth: '40vw',
  },
});

export default AppStyles;
