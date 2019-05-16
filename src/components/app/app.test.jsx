import renderer from "react-test-renderer";
import App from "./app";

it(`render correctly App component`, () => {
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
    .create(<App films={films}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

