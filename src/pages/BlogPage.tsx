import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core/styles";

//  logic
import { SERVER_PREFIX } from '../fakeServer/fakeServer';
import { StoreState } from "../store/rootReducer";
import * as blogActions from '../store/blog/actions';

//  ui
import PageTitle from '../components/ui/PageTitle';
import Box from '../components/ui/Box';
import BlogSearch from "../components/blog/BlogSearch";
import Loader from "../components/ui/Loader";
import BlogPostPreviewWrap from "../components/blog/BlogPostPreviewWrap";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'block',
    width: '100%',
  },
  section: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  left: {
    width: '40%',
    minWidth: '500px',
    minHeight: '80vh',
  },
  searchPanel: {

  },
  right: {
    position: 'fixed',
    top: 210,
    right: '15%',
    width: '50%',
    maxWidth: 700,
    minHeight: 'calc(100vh - 170px)',
  },
}));


const BlogPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const articles = useSelector((state: StoreState) => state.blog.data);
  const loading = useSelector((state: StoreState) => state.blog.loading);
  const history = useHistory();
  const token = localStorage.getItem(`${SERVER_PREFIX}_token`);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [history, token]);

  useEffect(() => {
    dispatch(blogActions.blogThunk(limit, page));
  }, [dispatch, limit, page]);

  const addMoreArticles = ():void => {
    setLimit(limit + 5);
  };


  return (
    <>
      <div className={classes.root}>
        <Box mt="50" mb="30">
          <PageTitle title="Blog" />
        </Box>  

        <section className={classes.section}>
          <aside className={classes.left}>
            <div className={classes.searchPanel}>
              <div>Filters</div>
              <BlogSearch 
                blogData={articles}
                addMore={addMoreArticles}
              />
            </div>
          </aside>

          <div className={classes.right}>
            <BlogPostPreviewWrap />
          </div>
        </section>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default BlogPage;