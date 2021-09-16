import { makeStyles, Theme } from "@material-ui/core/styles";

import logoutIcon from '../../assets/icons/logout.svg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: 'none',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.light,
    backgroundImage: `url(${logoutIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    cursor: 'pointer',
  },
}));

type LogoutProps = {
  width: number;
  clicked: () => void;
};

const Logout = ({ width, clicked }: LogoutProps): JSX.Element => {
  const classes = useStyles();

  return (
    <button 
      className={classes.root} 
      style={{ width: width, height: width, }}
      onClick={clicked}
    ></button>
  );
};

export default Logout;