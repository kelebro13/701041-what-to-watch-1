import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {mockStore, store, film} from "../../test/mock";
import AddReviewPage from "./add-review-page";

it(`renders properly`, () => {

  const tree = renderer
    .create(<Provider store={mockStore(store)}>
      <MemoryRouter>
        <AddReviewPage film={film}/>
      </MemoryRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
