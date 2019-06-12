import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import MyListPage from "./my-list-page";

it(`render correctly MyList component`, () => {
  const wrapper = renderer
    .create(<MemoryRouter><MyListPage/></MemoryRouter>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});

