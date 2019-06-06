import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import SingIn from './sing-in';
import {mockStore} from '../../test/test-utils';
import NameSpace from "../../reducer/name-spaces";


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
