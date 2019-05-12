import {shallow} from "enzyme";
import MovieCard from "./movie-card";


it(`check the onTitleClick callback`, () => {
  const id = 1;
  const film = {
    src: ``,
    title: `Aviator`
  };
  const handleTitleClick = jest.fn();

  const movieCard = shallow(<MovieCard id={id} film={film} onTitleClick={handleTitleClick}/>);

  movieCard.find(`a`).simulate(`click`);

  expect(handleTitleClick).toHaveBeenCalledTimes(1);
});

it(`check the onPreviewClick callback`, () => {
  const id = 1;
  const film = {
    src: ``,
    title: `Aviator`
  };
  const handlePreviewClick = jest.fn();

  const movieCard = shallow(<MovieCard id={id} film={film} onPreviewClick={handlePreviewClick}/>);

  movieCard.find(`button`).simulate(`click`);

  expect(handlePreviewClick).toHaveBeenCalledTimes(1);
  expect(handlePreviewClick).toBeCalledWith(film);
});
