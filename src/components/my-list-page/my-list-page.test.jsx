import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {mockStore, store, films} from "../../test/mock";
import MyListPage from "./my-list-page";

it(`render correctly MyList component`, () => {
  const wrapper = renderer
    .create(
        <Provider store={mockStore(store)}>
          <MemoryRouter>
            <MyListPage films={films}/>
          </MemoryRouter>
        </Provider>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});

