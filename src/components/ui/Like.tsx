import { makeStyles, Theme } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) => ({
  likeWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  likeBtn: {
    border: 0,
    outline: 'none',
    cursor: 'pointer',
    background: 'transparent',
  },
  likeCounter: {

  },
  like: {

  },
}));

type LikeProps = {
  likes: number;
};

const Like = ({ likes }: LikeProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.likeWrap}>
      <button className={classes.likeBtn}>
        <FavoriteIcon className={classes.like} />
      </button>
      <div className={classes.likeCounter}>{likes}</div>
    </div>  
  );
};

export default Like;