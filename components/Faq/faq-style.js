import { lighten } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const faqStyles = makeStyles({ uniqId: 'faq' })((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  text: {
    position: 'relative',
    zIndex: 15
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6, 6, 0),
    '& img': {
      display: 'block',
      width: 280,
    }
  },
  accordion: {
    position: 'relative',
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? '#303030' : lighten(theme.palette.secondary.light, 0.8),
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  content: {
    [`& .${classes.icon}`]: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  expanded: {
    background: theme.palette.primary.main,
    [`& .${classes.heading}`]: {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      }
    }
  },
  icon: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.common.black
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default faqStyles;
