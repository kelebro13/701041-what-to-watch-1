import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

Enzyme.configure({adapter: new Adapter()});

it(`check the onClick callback`, () => {
  const title = `Aviator`;
  const clickHandler = jest.fn();

  const movieCard = shallow(<MovieCard title={title} onClick={clickHandler}/>);

  movieCard.find(`a`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
