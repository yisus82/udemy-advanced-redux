import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeAuth } from '../actions/auth';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeAuth(!isLoggedIn));
  };

  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li style={{ margin: 10 }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: 10 }}>
          <Link to="/post">Post a comment</Link>
        </li>
        <li style={{ margin: 10 }}>
          <button type="button" onClick={handleClick}>
            {!isLoggedIn ? 'Sign in' : 'Sign out'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
