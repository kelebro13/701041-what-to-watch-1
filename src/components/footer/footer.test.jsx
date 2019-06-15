import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import Footer from "./footer";

it(`renders properly for index page`, () => {
  const wrapper = renderer
    .create(<MemoryRouter><Footer isIndexPage={true}/></MemoryRouter>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});

it(`renders properly for another pages`, () => {
  const wrapper = renderer
    .create(<MemoryRouter><Footer/></MemoryRouter>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
