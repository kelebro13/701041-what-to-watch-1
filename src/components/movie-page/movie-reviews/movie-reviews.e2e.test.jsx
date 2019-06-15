import {shallow} from 'enzyme';
import MovieReviews from "./movie-reviews";

it(`should send request server for load comments if there are none`, () => {
  const loadReviewsByFilmRequest = jest.fn();
  const filmId = 3;
  shallow(<MovieReviews filmId={filmId} loadReviewsByFilmRequest={loadReviewsByFilmRequest}/>);

  expect(loadReviewsByFilmRequest).toHaveBeenCalledTimes(1);
  expect(loadReviewsByFilmRequest).toBeCalledWith(filmId);
});
