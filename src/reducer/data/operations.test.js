import configureAPI from "../../api";
import MockAdapter from "axios-mock-adapter";
import {loadFilmsRequest} from './operations';
import {Actions} from "./data";

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
        type: Actions.LOAD_FILMS,
        payload: [{fake: true}],
      });
    });
});
