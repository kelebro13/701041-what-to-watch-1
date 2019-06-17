import renderer from "react-test-renderer";
import {mount} from "enzyme";
import AddFavoriteFilmButton from "./add-favorite-button";

it(`renders property`, () => {

  const tree = renderer
    .create(<AddFavoriteFilmButton filmId={1}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`should contain #in-list icon if is favorite film`, () => {
  const button = mount(<AddFavoriteFilmButton filmId={1} isFavorite={true}/>);
  expect(button.find(`use`).props(`xlink:href`)).toEqual({xlinkHref: `#in-list`});
});

it(`should contain #add icon if is not favorite film`, () => {
  const button = mount(<AddFavoriteFilmButton filmId={1} isFavorite={false}/>);
  expect(button.find(`use`).props(`xlink:href`)).toEqual({xlinkHref: `#add`});
});
