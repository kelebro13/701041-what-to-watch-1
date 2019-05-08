import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

Enzyme.configure({adapter: new Adapter()});

it(`check the onClick callback`, () => {
  const src = ``;
  const title = `Aviator`;
  const titleClickHandler = jest.fn();
  const previewClickHandler = jest.fn();

  const movieCard = shallow(<MovieCard src={src} title={title} onTitleClick={titleClickHandler} onPreviewClick={previewClickHandler}/>);

  movieCard.find(`a`).simulate(`click`);

  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
