import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { signup } from '../../actions/auth';

const Signup = ({ handleSubmit, history }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onSubmit = ({ email, password }) =>
    dispatch(
      signup({ email, password }, () => {
        history.push('/feature');
      })
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Sign up</legend>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
        />
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign up!</button>
        <span style={{ color: 'red' }}>{errorMessage}</span>
      </fieldset>
    </form>
  );
};

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default reduxForm({ form: 'signup' })(Signup);
