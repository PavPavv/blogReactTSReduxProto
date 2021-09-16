import { makeStyles, Theme } from "@material-ui/core/styles";

import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    
  },
  img: {
    maxWidth: '100%',
    animation: `$logoAnimation infinite 3s ease-in-out`,
  },
  '@keyframes logoAnimation': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(10px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
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