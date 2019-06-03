import {Actions, reducer, requireAuthorization, singIn} from "./user";
import configureAPI from "../../api";
import MockAdapter from "axios-mock-adapter";

describe(`ActionCreators`, () => {
  it(`check return action REQUIRED_AUTHORIZATION`, () => {
    expect(requireAuthorization(true)).toEqual({
      type: Actions.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });

  it(`check return action SING_IN`, () => {
    const api = configureAPI();
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    return singIn()(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Actions.SING_IN,
          payload: {fake: true}
        });
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
      type: Actions.SING_IN,
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
