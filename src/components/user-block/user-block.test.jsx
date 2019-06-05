import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import UserBlock from "./user-block";

it(`render correctly UserBlock component`, () => {
  const wrapper = renderer
    .create(<MemoryRouter><UserBlock/></MemoryRouter>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
