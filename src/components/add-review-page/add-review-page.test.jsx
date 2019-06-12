import renderer from "react-test-renderer";
import AddReviewPage from "./add-review-page";

it(`renders properly`, () => {

  const tree = renderer
    .create(<AddReviewPage/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
