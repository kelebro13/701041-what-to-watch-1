import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';

const movieTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
];

ReactDOM.render(
    <App movieTitles={movieTitles}/>,
    document.getElementById(`root`)
);
