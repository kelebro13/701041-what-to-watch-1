import {shallow} from 'enzyme';
import MovieListWithShowMore from './movie-list-with-show-more';
import MovieList from "../movie-list/movie-list";

it(`should render MovieList and Show More button if countItem less than films length`, () => {
  const films = new Array(21);
  const wrapper = shallow(<MovieListWithShowMore films={films} countItem={20}/>);

  expect(wrapper.find(MovieList).length).toEqual(1);
  expect(wrapper.find(`button`).length).toEqual(1);
});

it(`should render only MovieList if countItem more than films length`, () => {
  const films = new Array(10);
  const wrapper = shallow(<MovieListWithShowMore films={films} countItem={20}/>);

  expect(wrapper.find(MovieList).length).toEqual(1);
  expect(wrapper.find(`button`).length).toEqual(0);
});
