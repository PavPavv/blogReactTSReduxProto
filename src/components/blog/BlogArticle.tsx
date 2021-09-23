import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

//  logic
import * as blogActions from '../../store/blog/actions';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    borderRadius: 3,
    border: `1px solid ${theme.palette.secondary.dark}`,
    margin: '10px 0',
    padding: '10px 10px',
    cursor: 'pointer',

    '&:hover': {
      "& $circle": {
        backgroundColor: theme.palette.info.light,
      },
    }  
  },
  rootActive: {
    position: 'relative',
    borderRadius: 3,
    border: `1px solid ${theme.palette.primary.dark}`,
    margin: '10px 0',
    padding: '10px 10px',
    boxShadow: 'rgba(22, 84, 176, 0.2) 0px 2px 8px 0px;',
    cursor: 'pointer',
  },
  tag: {
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
  },
  title: {
    fontWeight: 'bold',
    maxWidth: '90%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  text: {
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  circle: {
    zIndex: 1,
    position: 'absolute',
    top: 20,
    right: 20,
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.dark,
    transition: 'linear .2s',
  },
  circleActive: {
    zIndex: 1,
    position: 'absolute',
    top: 20,
    right: 20,
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    transition: 'linear .2s',
  },
}));

type BlogArticleProps = {
  tag: number;
  id: number;
  title: string;
  text: string;
  activeStatus: boolean;
};

const BlogArticle = ({ tag, id, title, text, activeStatus }: BlogArticleProps): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const clickHandler = (): void => {
    dispatch(blogActions.setArticleId(id));
  };

  return (
    <div className={activeStatus ? classes.rootActive : classes.root} onClick={clickHandler}>
      <div className={activeStatus ? classes.circleActive : classes.circle}></div>
      <Typography variant="subtitle2" className={classes.tag}>Tag {tag}</Typography>
      <Typography variant="subtitle2" className={classes.title}>{title}</Typography>
      <Typography variant="body2" className={classes.text}>{text}</Typography>
    </div>
  );
};

export default BlogArticle;