import Comment from './Comment';

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment}></Comment>
      <div className="pl-2  border border-l-black ml-5">
        <CommentsList comments={comment.replies}></CommentsList>
      </div>
    </div>
  ));
};

export default CommentsList;
