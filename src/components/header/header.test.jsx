import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {mockStore} from "../../test/mock";
import Header from "./header";

it(`renders properly`, () => {
  const wrapper = renderer
    .create(<Provider store={mockStore()}><MemoryRouter><Header/></MemoryRouter></Provider>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
