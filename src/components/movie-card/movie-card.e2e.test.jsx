import {shallow} from "enzyme";
import MovieCard from "./movie-card";

it(`check the onPreviewClick callback`, () => {
  const film = {
    id: 1,
    name: `The Grand Budapest Hotel`,
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    previewVideoLink: `https://some-link`,
    genre: `Comedy`,
  };
  const handlePreviewClick = jest.fn();

  const movieCard = shallow(<MovieCard film={film} onPreviewClick={handlePreviewClick} isPlaying={false}/>);

  movieCard.simulate(`mouseEnter`);

  expect(handlePreviewClick).toHaveBeenCalledTimes(1);
  expect(handlePreviewClick).toBeCalledWith(film);
});
