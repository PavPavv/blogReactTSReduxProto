import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

//  logic
import { StoreState } from "../store/rootReducer";

//  ui
import PageTitle from '../components/ui/PageTitle';
import Box from '../components/ui/Box';

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
}));

const ArticlePage = (): JSX.Element => {
  const classes = useStyles();
  const article = useSelector((state: StoreState) => state.blog.article); 

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

      <Box mb="30">
        <Typography variant="subtitle1">#Tag{article?.userId}</Typography>
      </Box>

      <Box mb="30">
        <Typography variant="h3">{article?.title}</Typography>
      </Box>

      <Box mb="30">
        <Typography variant="body2">{article?.body}</Typography>
      </Box>
    </div>
  );
};

export default ArticlePage;