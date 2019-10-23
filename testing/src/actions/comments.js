import axios from 'axios';

export const ADD_COMMENT = 'ADD_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_URL =
  'https://jsonplaceholder.typicode.com/comments';

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
  const response = axios.get(FETCH_COMMENTS_URL);

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};

export { addComment, fetchComments };
