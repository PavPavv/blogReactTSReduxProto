import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  },
}));

const BlogPostPreview = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>BlogPostPreview</div>
  );
};

export default BlogPostPreview;