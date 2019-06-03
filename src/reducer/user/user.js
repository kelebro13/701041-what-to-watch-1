const initialState = {
  isAuthorizationRequired: true,
  user: null
};

const Actions = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SING_IN: `SING_IN`
};

const requireAuthorization = (status) => {
  return {
    type: Actions.REQUIRED_AUTHORIZATION,
    payload: status
  };
};

const singIn = (user) => {
  return {
    type: Actions.SING_IN,
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
    case Actions.SING_IN: {
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
  singIn,
  reducer
};
