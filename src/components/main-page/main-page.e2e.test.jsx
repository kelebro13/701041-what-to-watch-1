import {shallow} from "enzyme";
import MainPage from "./main-page";
import {DEFAULT_GENRE} from "../genre-list/genre-list";
import {films} from "../../test/mock";

it(`should call loadFilmsRequest if filmsByGenre is null`, () => {
  const loadFilmsRequest = jest.fn();
  shallow(<MainPage genre={DEFAULT_GENRE} filmsByGenre={[]} genres={[DEFAULT_GENRE]} loadFilmsRequest={loadFilmsRequest}/>);

  expect(loadFilmsRequest).toHaveBeenCalledTimes(1);
});

it(`should call loadPromoFilmRequest if film is undefined`, () => {
  const loadPromoFilmRequest = jest.fn();
  shallow(<MainPage genre={DEFAULT_GENRE} filmsByGenre={films} film={undefined} genres={[DEFAULT_GENRE]} loadPromoFilmRequest={loadPromoFilmRequest}/>);

  expect(loadPromoFilmRequest).toHaveBeenCalledTimes(1);
});
