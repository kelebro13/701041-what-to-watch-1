import renderer from "react-test-renderer";
import MovieList from "./movie-list";

it(`render correctly MovieList component`, () => {
  const films = [
    {
      title: `Aviator`,
      posterSrc: `img/aviator.jpg`,
      sources: {
        mp4: ``,
        webm: ``
      }
    },
    {
      title: `We need to talk about Kevin`,
      posterSrc: `img/we-need-to-talk-about-kevin.jpg`,
      sources: {
        mp4: ``,
        webm: ``
      }
    }
  ];

  const tree = renderer
    .create(<MovieList films={films} activeCard={-1} onActiveCardChange={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
