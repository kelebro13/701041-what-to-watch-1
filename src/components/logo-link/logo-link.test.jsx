import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import LogoLink from "./logo-link";

it(`renders property`, () => {
  const wrapper = renderer
    .create(<MemoryRouter><LogoLink/></MemoryRouter>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
