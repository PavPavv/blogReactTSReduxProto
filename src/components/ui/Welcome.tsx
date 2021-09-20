import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

//  logic
import { SERVER_PREFIX } from '../../fakeServer/fakeServer';
import { getDayTimeStr } from "../../utils/funcs/getDayTimeStr";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    background: theme.palette.secondary.light,
  },
  title: {
    color: theme.palette.info.light,
    animationName: '$welcomeAnimation',
    animationIterationCount: 1,
    animationTimingFunction: 'linear',
    animationDuration: '2s',
    animationDelay: '.1s',
    animationFillMode: 'both',
  },
  '@keyframes welcomeAnimation': {
    '0%': {
      fontSize: '12px',
    },
    '25%': {
      fontSize: '16px',
    },
    '50%': {
      fontSize: '20px',
    },
    '75%': {
      fontSize: '24px',
    },
    '100%': {
      fontSize: '28px',
    },
  },
}));

const Welcome = (): JSX.Element => {
  const classes = useStyles();
  const currentName = localStorage.getItem(`${SERVER_PREFIX}_name`);

  return (
    <div className={classes.root}>
      <Typography  className={classes.title}>Good {getDayTimeStr()}, {currentName}!</Typography>
    </div>
  );
};

export default Welcome;