import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";

it(`render correctly MovieList component`, () => {
  const films = [
    {
      src: `img/aviator.jpg`,
      title: `Aviator`
    },
    {
      src: `img/we-need-to-talk-about-kevin.jpg`,
      title: `We need to talk about Kevin`
    }
  ];

  const tree = renderer
    .create(<MovieList films={films}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
