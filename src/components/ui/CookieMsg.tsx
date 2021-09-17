import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { makeStyles, Theme } from "@material-ui/core/styles";

//  logic
import { SERVER_PREFIX } from '../../fakeServer/fakeServer';
import { setCookie, getCookie } from '../../utils/funcs/cookie';

//  ui
import MainButton from './MainButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1000,
    position: 'fixed',
    bottom: -100,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    background: theme.palette.info.light,
    transition: 'linear .3s',
  },
  rootActive: {
    zIndex: 1000,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    background: theme.palette.info.light,
    transition: 'linear .3s',
  },
  wrap: {
    maxWidth: 200,
    minWidth: 180,
  }

}));

const portalElement = document.getElementById('cookie') as HTMLElement;

const CookieMsg = (): JSX.Element => {
  const classes = useStyles();
  const [isCookieShown, setIsCookieShown] = useState(true);
  const cookieName = `${SERVER_PREFIX}_cookie`;
  const cookieValue = `${SERVER_PREFIX}_cookie-value`;
  const currentCookie = getCookie(cookieName);

  useEffect(() => {
    if (currentCookie) {
      setIsCookieShown(false);
    }
  }, [currentCookie]);

  const clickHandle = (): void => {
    console.log('test')
    setIsCookieShown(false);
    setCookie(cookieName, cookieValue);
  };

  const cookieModal = (
    <div className={isCookieShown ? classes.rootActive : classes.root}>
      <div className={classes.wrap}>
        <MainButton type="button" clicked={clickHandle} isDisabled>Accept cookie</MainButton>
      </div>
    </div>
  );

  return (
    <>
      {createPortal(cookieModal, portalElement)}
    </>
  );
};

export default CookieMsg;