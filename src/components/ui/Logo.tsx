import { makeStyles, Theme } from "@material-ui/core/styles";

import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'block',
  },
  img: {
    maxWidth: '100%',
  },
}));

type LogoProps = {
  width: number;
};

const Logo = ({ width }: LogoProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ width: width, height: width, }}>
      <img src={logo} alt="logo" className={classes.img} />
    </div>
  );
};

export default Logo;