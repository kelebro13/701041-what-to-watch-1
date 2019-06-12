
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import UserProfile from "./user-profile";

it(`render correctly UserBlock component`, () => {
  const wrapper = renderer
    .create(<MemoryRouter><UserProfile/></MemoryRouter>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
