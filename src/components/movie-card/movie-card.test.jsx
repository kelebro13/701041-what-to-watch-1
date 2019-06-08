import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
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
    .create(<MemoryRouter><MovieCard film={film} isPlaying={false}/></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
