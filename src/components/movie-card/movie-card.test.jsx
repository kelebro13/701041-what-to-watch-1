import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

it(`render correctly MovieCard component`, () => {
  const title = `Aviator`;

  const tree = renderer
    .create(<MovieCard title={title}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
