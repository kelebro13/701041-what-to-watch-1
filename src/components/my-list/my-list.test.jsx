import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import MyList from "./my-list";

it(`render correctly MyList component`, () => {
  const wrapper = renderer
    .create(<MemoryRouter><MyList/></MemoryRouter>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});

