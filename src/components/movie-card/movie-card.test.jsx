import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

it(`render correctly MovieCard component`, () => {
  const id = 1;
  const film = {
    src: ``,
    title: `Aviator`
  };

  const tree = renderer
    .create(<MovieCard id={id} film={film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
