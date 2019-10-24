import React from 'react';
import { useSelector } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';

const requireAuth = Component => {
  const ComposedComponent = ({ history, ...rest }) => {
    const auth = useSelector(state => state.auth);

    /**
     * Checks if a redirect is needed
     */
    const shouldRedirect = React.useCallback(() => {
      if (!auth) {
        history.push('/');
      }
    }, [auth, history]);

    React.useEffect(() => shouldRedirect(), [shouldRedirect]);

    return <Component history={history} {...rest} />;
  };

  ComposedComponent.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
  };

  return ComposedComponent;
};

export default requireAuth;
