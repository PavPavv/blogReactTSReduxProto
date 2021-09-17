import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

//  logic
import * as authActions from '../../store/auth/actions';
import { SERVER_PREFIX } from '../../fakeServer/fakeServer';

//  ui
import Box from "./Box";
import Logo from "./Logo";
import Logout from "./Logout";
import NavMenu from "./NavMenu";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1000,
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
  name: {
    color: theme.palette.primary.light,
  },
}));


const Header = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  let name = localStorage.getItem(`${SERVER_PREFIX}_name`);

  if (!name) {
    name = 'Unknown';
  }

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
        <Box mr="20">
          <Typography variant="body1" className={classes.name}>{name}</Typography>
        </Box>
        <Logout width={25} clicked={logoutHandler} />
      </div>
    </header>
  );
};

export default Header;