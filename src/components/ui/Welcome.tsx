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
  },
}));

const Welcome = (): JSX.Element => {
  const classes = useStyles();
  const currentName = localStorage.getItem(`${SERVER_PREFIX}_name`);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>Good {getDayTimeStr()}, {currentName}!</Typography>
    </div>
  );
};

export default Welcome;