const async = ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(response => dispatch({ ...action, payload: response }));
};

export default async;
