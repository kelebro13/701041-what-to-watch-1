import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`render correctly App component`, () => {
  const movieTitles = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
  ];
  const tree = renderer
    .create(<App movieTitles={movieTitles}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

