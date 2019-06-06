import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {mockStore} from "../../test/test-utils";
import NameSpace from "../../reducer/name-spaces";
import MyList from "./my-list";

it(`render correctly MyList component`, () => {
  const store = {
    [NameSpace.USER]: {
      user: {
        id: 1,
        email: `Oliver.conner@gmail.com`,
        name: `Oliver.conner`,
        avatarUrl: `img/1.png`
      }
    }
  };

  const wrapper = renderer
    .create(<Provider store={mockStore(store)}><MemoryRouter><MyList/></MemoryRouter></Provider>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});

