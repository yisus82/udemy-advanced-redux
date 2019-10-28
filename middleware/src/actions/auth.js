export const CHANGE_AUTH = 'CHANGE_AUTH';

/**
 * Changes authentication
 * @param {boolean} isLoggedIn User is logged in?
 */
const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
});

export { changeAuth };
