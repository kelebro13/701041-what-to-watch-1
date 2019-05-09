import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

it(`render correctly MovieCard component`, () => {
  const id = 1;
  const src = ``;
  const title = `Aviator`;

  const tree = renderer
    .create(<MovieCard id={id} src={src} title={title}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
