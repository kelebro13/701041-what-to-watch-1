import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {mockStore, store} from "../../test/mock";
import AddReviewPage from "./add-review-page";

it(`renders properly`, () => {

  const tree = renderer
    .create(<Provider store={mockStore(store)}>
      <MemoryRouter>
        <AddReviewPage/>
      </MemoryRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
