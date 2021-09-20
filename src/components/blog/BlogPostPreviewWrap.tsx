import { makeStyles, Theme } from "@material-ui/core/styles";

//  ui
import BlogPostPreview from "./BlogPostPreview";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    padding: 32,
  },
}));

const BlogPostPreviewWrap = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BlogPostPreview />
    </div>
  );
};

export default BlogPostPreviewWrap;