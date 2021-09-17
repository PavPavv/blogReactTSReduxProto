import { makeStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography } from "@material-ui/core";

import Box from '../ui/Box';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    width: '100%',
    height: 100,
  },
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link :{
    display: 'block',
    width: 32,
    height: 32,
    color: theme.palette.secondary.main,
    cursor: 'pointer',
  },
  icon: {
    width: '100%',
    height: '100%',
  }
}));

const Footer = (): JSX.Element => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.block}>
        <Box mr="20">
          <a href="https://github.com/PavPavv" className={classes.link}>
            <GitHubIcon className={classes.icon} />
          </a>
        </Box>
        <Box mr="20">
          <a href="https://github.com/PavPavv" className={classes.link}>
            <InstagramIcon className={classes.icon} />
          </a>
        </Box>
        <Box>
          <a href="https://github.com/PavPavv" className={classes.link}>
            <LinkedInIcon className={classes.icon} />
          </a>
        </Box>
      </div>
      <div className={classes.block}>
        <Box mt="10">
          <Typography variant="subtitle2">
            &copy;{new Date().getFullYear()}
          </Typography>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;