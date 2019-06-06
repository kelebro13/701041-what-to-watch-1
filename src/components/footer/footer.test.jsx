import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import Footer from "./footer";

it(`renders properly`, () => {
  const wrapper = renderer
    .create(<MemoryRouter><Footer/></MemoryRouter>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
