import React from 'react';
import { useDispatch } from 'react-redux';
import { addComment, fetchComments } from '../actions/comments';
import requireAuth from './requireAuth';

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

  /**
   * Fetches the comments
   */
  const handleClick = () => {
    dispatch(fetchComments());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          style={{ resize: 'none' }}
          value={comment}
          onChange={handleChange}
        />
        <div>
          <button id="submit-comment" type="submit">
            Submit comment
          </button>
        </div>
      </form>
      <button id="fetch-comments" type="button" onClick={handleClick}>
        Fetch comments
      </button>
    </div>
  );
};

export default requireAuth(CommentBox);
