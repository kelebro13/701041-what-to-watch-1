import {createStore} from "redux";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import App from "./app";

it(`render correctly App component`, () => {

  const initialState = {
    genre: `All genres`,
    filmsByGenre: [
      {
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Kids & Family`,
        posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        sources: {
          mp4: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          webm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        }
      },
      {
        title: `Johnny English`,
        genre: `Comedies`,
        posterSrc: `img/johnny-english.jpg`,
        sources: {
          mp4: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          webm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        }
      }
    ]
  };
  const mockReducer = (state) => state;
  const mockStore = createStore(mockReducer, initialState);

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
    .create(<Provider store={mockStore}><App films={films}/></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

