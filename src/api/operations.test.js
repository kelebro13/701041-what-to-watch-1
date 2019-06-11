import configureAPI from "./api";
import MockAdapter from "axios-mock-adapter";
import {Actions as DateActions} from "../reducer/data/data";
import {singInRequest, loadFilmsRequest} from "../api/operations";
import {Actions as UserActions} from "../reducer/user/user";

it(`check return action LOAD_FILMS`, () => {
  const api = configureAPI();
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  apiMock
    .onGet(`/films`)
    .reply(200, [{fake: true}]);

  return loadFilmsRequest()(dispatch, null, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: DateActions.LOAD_FILMS,
        payload: [{fake: true}],
      });
    });
});

it(`check return action SING_IN`, () => {
  const api = configureAPI();
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();

  apiMock
    .onPost(`/login`)
    .reply(200, {fake: true});

  return singInRequest()(dispatch, null, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActions.SING_IN,
        payload: {fake: true}
      });
    });
});
