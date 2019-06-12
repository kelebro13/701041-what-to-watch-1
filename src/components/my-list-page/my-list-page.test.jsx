import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import MyListPage from "./my-list-page";
import {mockStore, store} from "../../test/mock";

it(`render correctly MyList component`, () => {
  const wrapper = renderer
    .create(
        <Provider store={mockStore(store)}>
          <MemoryRouter>
            <MyListPage/>
          </MemoryRouter>
        </Provider>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});

