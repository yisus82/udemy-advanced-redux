import React from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../actions/comments';

const CommentBox = () => {
  const [comment, setComment] = React.useState('');

  const dispatch = useDispatch();

  /**
   * Handles the change event
   * @param {object} event Event object
   */
  const handleChange = event => setComment(event.target.value);

  /**
   * Handles the submit event
   * @param {object} event Event object
   */
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addComment(comment));
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea
        style={{ resize: 'none' }}
        value={comment}
        onChange={handleChange}
      />
      <div>
        <button type="submit">Submit comment</button>
      </div>
    </form>
  );
};

export default CommentBox;
