import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';

import Box from "../../ui/Box";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 400,
    width: '100%',
    boxSizing: 'border-box',
  },
  link: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

type SignUpSuccessProps = {
  toggleLoginHandler: () => void;
};

const SignUpSuccess = ({ toggleLoginHandler }: SignUpSuccessProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="subtitle2">Registration is succeeded! To log in follow to </Typography>
        </Grid>
        <Grid item>
          <Box mr="5" ml="5" />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" className={classes.link} onClick={toggleLoginHandler}>log in form</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpSuccess;