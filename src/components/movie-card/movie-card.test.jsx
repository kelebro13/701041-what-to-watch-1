import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

it(`render correctly MovieCard component`, () => {
  const film = {
    id: 1,
    name: `The Grand Budapest Hotel`,
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    previewVideoLink: `https://some-link`,
    genre: `Comedy`,
  };

  const tree = renderer
    .create(<MovieCard film={film} isPlaying={false}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
