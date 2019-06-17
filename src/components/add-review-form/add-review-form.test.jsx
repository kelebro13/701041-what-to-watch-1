import renderer from "react-test-renderer";
import AddReviewForm from "./add-review-form";

it(`renders property`, () => {

  const tree = renderer
    .create(<AddReviewForm filmId={1}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
