import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";

it(`renders properly`, () => {

  const tree = renderer
    .create(<MovieReviews/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
