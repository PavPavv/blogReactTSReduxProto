//  logic
import { Comment } from './comments';

//  ui
import CommentComponent from './CommentComponent';

type CommentsProps = {
  comments: Comment[];
};

const Comments = ({ comments }: CommentsProps): JSX.Element => {
  

  return (
    <>
      {comments.map((item: Comment) => (
        <CommentComponent 
          key={item.id}  
          author={item.author}
          time={item.time}
          liked={+item.liked}
          body={item.body}
          moreComments={item.subComments}
        />
      ))}
    </>
  );
};

export default Comments;