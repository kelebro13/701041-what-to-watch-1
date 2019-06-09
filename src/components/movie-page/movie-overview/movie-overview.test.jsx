import renderer from "react-test-renderer";
import {film} from "../../test/mock";
import MovieOverview from "./movie-overview";

it(`renders properly`, () => {

  const tree = renderer
    .create(<MovieOverview film={film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
