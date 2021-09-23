import { makeStyles, Theme } from "@material-ui/core/styles";
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme: Theme) => ({
  viewsWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  viewsBtn: {
    border: 0,
    outline: 'none',
    cursor: 'pointer',
    background: 'transparent',
  },
  viewsCounter: {

  },
  views: {

  },
}));

type ViewsProps = {
  views: number;
};

const Views = ({ views }: ViewsProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.viewsWrap}>
      <button className={classes.viewsBtn}>
        <VisibilityIcon className={classes.views} />
      </button>
      <div className={classes.viewsCounter}>{views}</div>
    </div>  
  );
};

export default Views;