import { createPortal } from 'react-dom';

import Overlay from './Overlay';
import Spinner from './Spinner';

const portalElement = document.getElementById('overlay') as HTMLElement;

const Loader = (): JSX.Element => {
  return (
    <>
      {createPortal(<Overlay />, portalElement)}
      {createPortal(<Spinner />, portalElement)}
    </>
  );
};

export default Loader;
