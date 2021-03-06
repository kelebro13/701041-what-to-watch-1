import renderer from "react-test-renderer";
import {film} from "../../../test/mock";
import MovieDetails from "./movie-details";

it(`renders property`, () => {

  const tree = renderer
    .create(<MovieDetails film={film} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
