import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/">Redux Auth</Link>
      {!token && (
        <div>
          <Link style={{ marginRight: '1rem' }} to="/signin">
            Sign in
          </Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}
      {token && (
        <div>
          <Link style={{ marginRight: '1rem' }} to="/feature">
            Feature
          </Link>
          <Link to="/signout">Sign out</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
