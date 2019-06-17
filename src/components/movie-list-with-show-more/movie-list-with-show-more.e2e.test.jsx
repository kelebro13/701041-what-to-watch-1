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

it(`should call changeCountItem on button click`, () => {
  const films = new Array(21);
  const changeCountItem = jest.fn();
  const wrapper = shallow(<MovieListWithShowMore films={films} countItem={20} changeCountItem={changeCountItem}/>);

  wrapper.find(`button`).simulate(`click`, {preventDefault: () => {}});
  expect(changeCountItem).toHaveBeenCalledTimes(1);
});
