import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.error.main,
  },  
}));

type InputErrorProps = {
  children: React.ReactNode;
};

const InputError = ({ children }: InputErrorProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.root}>{children}</Typography>
  );
};

export default InputError;