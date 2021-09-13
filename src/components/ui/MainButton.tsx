import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: 48,
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: 0,
    lineHeight: '48px',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.palette.primary.light,
    background: theme.palette.primary.dark,
    outline: 'none',
    cursor: 'pointer',
  },
  disabledClass: {
    width: '100%',
    height: 48,
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: 0,
    lineHeight: '48px',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.palette.primary.light,
    background: theme.palette.secondary.light,
    outline: 'none',
  },

}));

type MainButtonProps = {
  type: 'submit' | 'button';
  children: React.ReactNode;
  isDisabled: boolean;
  clicked: () => void;
};

const MainButton = ({ children, isDisabled, clicked }: MainButtonProps): JSX.Element => {
  const classes = useStyles();

  return (
    <button className={!isDisabled ? classes.disabledClass : classes.root} onClick={clicked} disabled={!isDisabled}>{children}</button>
  );
};

export default MainButton;