import renderer from "react-test-renderer";
import MovieListWithShowMore from "./movie-list-with-show-more";

it(`renders properly`, () => {

  const films = new Array(20);

  const tree = renderer
    .create(<MovieListWithShowMore films={films} countItem={20}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
