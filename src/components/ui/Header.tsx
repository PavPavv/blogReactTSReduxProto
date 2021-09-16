import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Box from "./Box";
import Logo from "./Logo";
import Logout from "./Logout";
import NavMenu from "./NavMenu";
import * as authActions from '../../store/auth/actions';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    height: 70,
    backgroundColor: theme.palette.secondary.light,
  },
  headerSide: {
    display: 'flex',
    alignItems: 'center', 
  },
}));


const Header = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = (): void => {
    dispatch(authActions.logout());
    history.push('/auth');
  };

  return (
    <header className={classes.root}>
      <div className={classes.headerSide}>
        <Box mb="10">
          <Link to="/">
            <Logo width={40} />
          </Link>
        </Box>
        <Box ml="20">
          <NavMenu />
        </Box>
      </div>
      <div className={classes.headerSide}>
        <Logout width={25} clicked={logoutHandler} />
      </div>
    </header>
  );
};

export default Header;