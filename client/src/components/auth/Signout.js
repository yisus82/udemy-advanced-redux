import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signout } from '../../actions/auth';

const Signout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signout());
  }, [dispatch]);

  return <div>See you later, alligator!</div>;
};

export default Signout;
