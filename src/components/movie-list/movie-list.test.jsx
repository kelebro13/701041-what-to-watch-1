import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import MovieList from "./movie-list";

it(`render correctly MovieList component`, () => {
  const films = [
    {
      id: 1,
      name: `The Grand Budapest Hotel`,
      previewImage: `img/the-grand-budapest-hotel.jpg`,
      previewVideoLink: `https://some-link`,
      genre: `Comedy`,
    }
  ];

  const tree = renderer
    .create(<MemoryRouter><MovieList films={films} activeCard={-1} onActiveCardChange={() => {}}/></MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
