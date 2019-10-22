import axios from 'axios';

export const ADD_COMMENT = 'ADD_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

/**
 * Adds a comment
 * @param {string} comment Comment
 */
const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment,
});

/**
 * Fetches the comments
 */
const fetchComments = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};

export { addComment, fetchComments };
