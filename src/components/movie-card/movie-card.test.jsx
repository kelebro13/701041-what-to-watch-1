import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

it(`render correctly MovieCard component`, () => {
  const id = 1;
  const film = {
    title: `Aviator`,
    posterSrc: ``,
    sources: {
      mp4: ``,
      webm: ``
    }
  };

  const tree = renderer
    .create(<MovieCard id={id} film={film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
