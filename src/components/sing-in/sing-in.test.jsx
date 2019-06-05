import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import SingIn from './sing-in';
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import configureAPI from "../../api";
import MockAdapter from "axios-mock-adapter";
import NameSpace from "../../reducer/name-spaces";

const api = configureAPI();
const apiMock = new MockAdapter(api);

apiMock
  .onPost(`/login`)
  .reply(200, {fake: true});

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);

const store = {
  [NameSpace.USER]: {
    isAuthorizationRequired: false
  }
};

it(`render correctly SingIn component`, () => {
  const wrapper = renderer
    .create(<Provider store={mockStore(store)}><MemoryRouter><SingIn/></MemoryRouter></Provider>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
