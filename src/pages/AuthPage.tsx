import { useState } from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

//  ui
import Logo from '../components/ui/Logo';
import Box from '../components/ui/Box';
import Login from "../components/auth/Login/Login";
import SignUp from '../components/auth/SignUp/SignUp';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    background: theme.palette.info.main,
  },
  container: {
    padding: 50,
  },
}));

const AuthPage = (): JSX.Element => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className={classes.root}>
      
      <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.container}>
        <Logo width={100} />
        <Box mt="30" />
        {isLogin ? <Login toggleLogin={setIsLogin} /> : <SignUp toggleLogin={setIsLogin} />}
      </Grid>
    </div>
  );
};

export default AuthPage;