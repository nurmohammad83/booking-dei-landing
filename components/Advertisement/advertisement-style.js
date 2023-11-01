import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';

const advertisementStyles = makeStyles({ uniqId: 'about' })((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    position: 'relative',
    minHeight: 320,
    width: 1150,
    overflow: 'hidden',
    boxShadow: theme.shadows[2],
    borderRadius: theme.rounded.medium,
    background: theme.palette.mode === 'dark' ? darken('#303030', 0.2) : theme.palette.common.white,
    paddingRight: theme.spacing(17),
    paddingLeft: theme.spacing(17),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('lg')]: {
      boxShadow: 'none',
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },

  action: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default advertisementStyles;
