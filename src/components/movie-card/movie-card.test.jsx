import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

it(`render correctly MovieCard component`, () => {
  const src = ``;
  const title = `Aviator`;
  const titleClickHandler = jest.fn();
  const previewClickHandler = jest.fn();

  const tree = renderer
    .create(<MovieCard src={src} title={title} onTitleClick={titleClickHandler} onPreviewClick={previewClickHandler}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
