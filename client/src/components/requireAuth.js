import React from 'react';
import { useSelector } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';

const requireAuth = Component => {
  const ComposedComponent = ({ history, ...rest }) => {
    const token = useSelector(state => state.auth.token);

    const shouldRedirect = React.useCallback(() => {
      if (!token) {
        history.push('/');
      }
    }, [token, history]);

    React.useEffect(() => shouldRedirect(), [shouldRedirect]);

    return <Component history={history} {...rest} />;
  };

  ComposedComponent.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
  };

  return ComposedComponent;
};

export default requireAuth;
