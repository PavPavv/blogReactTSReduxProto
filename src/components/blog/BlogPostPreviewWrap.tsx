import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
      <Typography variant="subtitle1">BlogPostPreviewWrap</Typography>
    </div>
  );
};

export default BlogPostPreviewWrap;