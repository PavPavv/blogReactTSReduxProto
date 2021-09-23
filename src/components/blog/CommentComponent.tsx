import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

//  logic
import { Comment } from './comments';

//  ui
import Like from "../ui/Like";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 30,
  },
  root1: {
    marginTop: 20,
  },
  subRoot: {
    marginLeft: 50,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '36px',
    fontWeight: 'bold',
    fontSize: '22px',
    color: theme.palette.secondary.light,
    background: theme.palette.info.dark,
  },
  author: {
    marginLeft: 15,
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  time: {
    marginLeft: 5,
  },
  body: {
    paddingLeft: 50,
  },
  likes: {
    float: 'right',
    fontSize: '16px',
    color: theme.palette.primary.main,
  },
}));

type CommentComponentProps = {
  author: string;
  time: Date;
  liked: number;
  body: string;
  moreComments: Comment[] | []; 
};

const CommentComponent = ({ author, time, liked, body, moreComments }: CommentComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.avatar}>{author.split('')[0]}</div>
        <Typography variant="subtitle2" className={classes.author}>{author}</Typography>
        <div className={classes.time}>{time.toLocaleDateString()}</div>
      </div>
      <div className={classes.body}>{body}</div>
      <div className={classes.likes}><span>+</span>{liked}</div>
      <div className={classes.subRoot}>{moreComments.map((item) => (

        <div className={classes.root1} key={item.id}>
          <div className={classes.header}>
            <div className={classes.avatar}>{item.author.split('')[0]}</div>
            <Typography variant="subtitle2" className={classes.author}>{item.author}</Typography>
            <div className={classes.time}>{item.time.toLocaleDateString()}</div>
          </div>
          <div className={classes.body}>{item.body}</div>
          <div className={classes.likes}><span>+</span>{liked}</div>   
        </div>
      ))}</div>

    </div>
  );
};

export default CommentComponent;