import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


//  logic
import { StoreState } from "../store/rootReducer";
import * as blogActions from '../store/blog/actions';
import { Comment, comments } from '../components/blog/comments';

//  ui
import PageTitle from '../components/ui/PageTitle';
import Box from '../components/ui/Box';
import Like from '../components/ui/Like';
import Views from '../components/ui/Views';
import Time from '../components/ui/Time';
import Comments from '../components/blog/Comments';

const useStyles = makeStyles((theme: Theme) => ({
  breadcrumbs: {
    display: 'flex',
  },
  '& > *': {
    fontSize: 16,
  },
  breadNav: {
    color: theme.palette.primary.main,
  },
  article: {
    borderRadius: 3,
    border: `1px solid ${theme.palette.secondary.dark}`,
    margin: '10px 0',
    padding: 20,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;',
  },
  panel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  panelSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const ArticlePage = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const article = useSelector((state: StoreState) => state.blog.article);
  const [articleComments, setArticleComments] = useState<Comment[]>([]);

  useEffect(() => {
    dispatch(blogActions.articleThunk())
  }, [dispatch]);

  useEffect(() => {
    
    setArticleComments(comments);
  }, [articleComments])

  return (
    <div>
      <Box mt="50" mb="50">
        <PageTitle title="Article" />
      </Box>

      <Box mb="30">
        <div className={classes.breadcrumbs}>
          <Link to="/" className={classes.breadNav}>Blog</Link>
          <span className={classes.breadNav}>/</span>
          <div className={classes.breadNav}>Article {article?.id}</div>
        </div>
      </Box>

      <section className={classes.article}>
        <Box mb="30">
          <Typography variant="subtitle1">#Tag{article?.userId}</Typography>
        </Box>

        <Box mb="30">
          <Typography variant="h3">{article?.title}</Typography>
        </Box>

        <Box mb="30">
          <Typography variant="body2">{article?.body}</Typography>
        </Box>

        <div className={classes.panel}>
          <div className={classes.panelSide}>
            <Time />
          </div>
          <div className={classes.panelSide}>
            <Views views={800} />
            <Like likes={128} />
          </div>
        </div>
      </section>

      <Box mt="30">
        <>
          <Box mb="20">
            <Typography variant="subtitle1">Comments:</Typography>
          </Box>
          <Comments comments={articleComments} />
        </>
      </Box>
    </div>
  );
};

export default ArticlePage;