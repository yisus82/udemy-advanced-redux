export const ADD_COMMENT = 'ADD_COMMENT';

/**
 * Adds a comment
 * @param {string} comment Comment
 */
const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment,
});

export { addComment };
