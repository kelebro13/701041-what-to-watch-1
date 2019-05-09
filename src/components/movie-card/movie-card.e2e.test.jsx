import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

Enzyme.configure({adapter: new Adapter()});

it(`check the onTitleClick callback`, () => {
  const id = 1;
  const src = ``;
  const title = `Aviator`;
  const handleTitleClick = jest.fn();

  const movieCard = shallow(<MovieCard id={id} src={src} title={title} onTitleClick={handleTitleClick}/>);

  movieCard.find(`a`).simulate(`click`);

  expect(handleTitleClick).toHaveBeenCalledTimes(1);
});

it(`check the onPreviewClick callback`, () => {
  const id = 1;
  const src = ``;
  const title = `Aviator`;
  const handlePreviewClick = jest.fn();

  const movieCard = shallow(<MovieCard id={id} src={src} title={title} onPreviewClick={handlePreviewClick}/>);

  movieCard.find(`button`).simulate(`click`);

  expect(handlePreviewClick).toHaveBeenCalledTimes(1);
  expect(handlePreviewClick).toBeCalledWith(id);
});
