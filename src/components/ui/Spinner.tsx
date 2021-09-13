import { makeStyles, Theme } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    top: 'calc(50% - 23px)',
    left: 'calc(50% - 23px)',
  },
}));

const Spinner = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default Spinner;