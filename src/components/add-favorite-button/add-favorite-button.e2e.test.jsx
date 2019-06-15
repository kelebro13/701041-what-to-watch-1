import {shallow} from "enzyme/build";
import AddFavoriteFilmButton from "./add-favorite-button";

it(`should call updateFavoriteFilmRequest with status 0 if favorite film`, () => {
  const updateFavoriteFilmRequest = jest.fn();
  const filmId = 1;
  const button = shallow(<AddFavoriteFilmButton filmId={filmId} isFavorite={true} updateFavoriteFilmRequest={updateFavoriteFilmRequest}/>);

  button.find(`button`).simulate(`click`);

  expect(updateFavoriteFilmRequest).toHaveBeenCalledTimes(1);
  expect(updateFavoriteFilmRequest).toBeCalledWith(filmId, 0);
});

it(`should call updateFavoriteFilmRequest with status 1 if not favorite film`, () => {
  const updateFavoriteFilmRequest = jest.fn();
  const filmId = 1;
  const button = shallow(<AddFavoriteFilmButton filmId={filmId} isFavorite={false} updateFavoriteFilmRequest={updateFavoriteFilmRequest}/>);

  button.find(`button`).simulate(`click`);

  expect(updateFavoriteFilmRequest).toHaveBeenCalledTimes(1);
  expect(updateFavoriteFilmRequest).toBeCalledWith(filmId, 1);
});
