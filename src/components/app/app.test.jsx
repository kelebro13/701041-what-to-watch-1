import renderer from "react-test-renderer";
import App from "./app";

it(`render correctly App component`, () => {
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
    .create(<App films={films}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

