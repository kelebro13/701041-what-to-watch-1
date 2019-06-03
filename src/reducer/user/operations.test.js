import configureAPI from "../../api";
import MockAdapter from "axios-mock-adapter";
import {Actions} from "./user";
import {singInRequest} from "./operations";

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
        type: Actions.SING_IN,
        payload: {fake: true}
      });
    });
});
