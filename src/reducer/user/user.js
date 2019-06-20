const initialState = {
  isAuthorizationRequired: true,
  user: null
};

const Actions = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_USER: `LOAD_USER`
};

const requireAuthorization = (status) => {
  return {
    type: Actions.REQUIRED_AUTHORIZATION,
    payload: status
  };
};

const loadUser = (user) => {
  return {
    type: Actions.LOAD_USER,
    payload: user
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        isAuthorizationRequired: action.payload
      };
    }
    case Actions.LOAD_USER: {
      return {
        ...state,
        isAuthorizationRequired: false,
        user: action.payload
      };
    }
  }
  return state;
};

export {
  Actions,
  requireAuthorization,
  loadUser,
  reducer
};
