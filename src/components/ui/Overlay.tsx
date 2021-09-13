import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
}));

type OverlayProps = {
  onClose?: () => void;
};

const Overlay = ({ onClose }: OverlayProps): JSX.Element => {
  const classes = useStyles();

  return <div className={classes.root} onClick={onClose} />;
};

export default Overlay;