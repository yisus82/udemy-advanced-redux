import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import { addComment, fetchComments } from '../actions/comments';

const CommentBox = ({ history }) => {
  const [comment, setComment] = React.useState('');

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  /**
   * Checks if a redirect is needed
   */
  const shouldRedirect = () => {
    if (!auth) {
      history.push('/');
    }
  };

  React.useEffect(() => shouldRedirect(), [auth]);

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

CommentBox.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default CommentBox;
