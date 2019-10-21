import React from 'react';
import { useSelector } from 'react-redux';

const CommentList = () => {
  const comments = useSelector(state => state.comments);

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
