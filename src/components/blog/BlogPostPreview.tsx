import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

//  logic
import { StoreState } from "../../store/rootReducer";
import { Article } from '../../store/blog/actions';
import * as blogActions from '../../store/blog/actions';

//  ui
import Box from '../ui/Box'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // background: 'gray',
  },
  header: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  link: {
    width: '100%',
    textAlign: 'right',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    transition: 'linear .1s',

    '&:hover': {
      color: theme.palette.primary.dark,
    }
  }
}))

const BlogPostPreview = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentArticleId = useSelector((state: StoreState) => state.blog.articleId);
  const pickedArticleToStore = useSelector((state: StoreState) => state.blog.data.find((item: Article) => {
    return item.id === currentArticleId;
  }));
  const pickedArticle = useSelector((state: StoreState) => state.blog.article);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(pickedArticle);

  useEffect(() => {
    if (pickedArticleToStore) {
      dispatch(blogActions.setPickedArticle(pickedArticleToStore));
    }
  }, [dispatch, currentArticleId, pickedArticleToStore]);

  useEffect(() => {
    dispatch(blogActions.articleThunk());
  }, [dispatch]);

  useEffect(() => {
    setCurrentArticle(pickedArticle)
  }, [pickedArticle]);

  const handleClick = () => {
    history.push(`/blog/${currentArticleId}`);
  };

  return (
    <section className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">#Tag{currentArticle?.userId}</Typography>
        <Typography variant="subtitle2">Article id: {currentArticle?.id}</Typography>
      </div>
      <Typography variant="subtitle1">{currentArticle?.title}</Typography>
      <Box mt="20">
        <Typography variant="body2">{currentArticle?.body}</Typography>
      </Box>
      <Link to={`/blog/${currentArticleId}`} className={classes.link} onClick={handleClick}>
        <Box mt="30">
          <Typography variant="subtitle2">Read post</Typography>
        </Box>
      </Link>
      
    </section>
  );
};

export default BlogPostPreview;