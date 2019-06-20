import {Actions, reducer, requireAuthorization, loadUser} from "./user";

describe(`ActionCreators`, () => {
  it(`check return action REQUIRED_AUTHORIZATION`, () => {
    expect(requireAuthorization(true)).toEqual({
      type: Actions.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });

  it(`check return action LOAD_USER`, () => {
    const user = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `img/1.png`
    };

    expect(loadUser(user)).toEqual({
      type: Actions.LOAD_USER,
      payload: user
    });
  });
});

describe(`reducer`, () => {
  const initialState = {
    isAuthorizationRequired: false,
    user: null
  };

  it(`should set isAuthorizationRequired`, () => {
    const store = reducer(initialState, requireAuthorization(true));

    expect(store).toEqual({
      ...initialState,
      isAuthorizationRequired: true
    });
  });

  it(`should set user and isAuthorizationRequired`, () => {
    const user = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `img/1.png`
    };

    const store = reducer(initialState, {
      type: Actions.LOAD_USER,
      payload: user
    });

    expect(store).toEqual({
      ...initialState,
      user,
      isAuthorizationRequired: false
    });
  });

  it(`should return the initial state`, () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
