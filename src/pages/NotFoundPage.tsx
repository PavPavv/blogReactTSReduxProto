import {  Link } from 'react-router-dom';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

//  ui
import Box from '../components/ui/Box';

import image404 from '../assets/404.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
    width: '100%',
    height: '100%',
  },
  img404: {
    width: 320,
    height: 160,
    backgroundImage: `url(${image404})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  title404: {
    fontSize: 68,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.img404}></div>
        <div className={classes.title404}>404</div>
        <Box mt="20">
          <Typography variant="subtitle2">Unknow page... Maybe on a <Link to="/">main page</Link>?</Typography>
        </Box>
      </div>
    </div>
  );
};

export default NotFoundPage;