import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import MainHeader from "./main-header";
import {Provider} from "react-redux";
import {mockStore} from "../../test/test-utils";
import NameSpace from "../../reducer/name-spaces";

it(`renders properly`, () => {
  const state = {
    [NameSpace.USER]: {
      user: {
        id: 1,
        email: `Oliver.conner@gmail.com`,
        name: `Oliver.conner`,
        avatarUrl: `img/1.png`
      }
    }
  };

  const film = {
    name: `We need to talk about Kevin`,
    posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/We_need_to_talk_about_Kevin.jpg`,
    previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/we-need-to-talk-about-kevin.jpg`,
    backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/We_need_to_talk_about_Kevin.jpg`,
    backgroundColor: `#E1DFDE`,
    description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
    rating: 7.5,
    scoresCount: 123240,
    director: `Lynne Ramsay`,
    starring: [
      `Tilda Swinton`,
      `John C. Reilly`,
      `Ezra Miller`
    ],
    runTime: 112,
    genre: `Drama`,
    released: 2011,
    id: 2,
    isFavorite: false,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  };

  const wrapper = renderer
    .create(<Provider store={mockStore(state)}><MemoryRouter><MainHeader film={film}/></MemoryRouter></Provider>)
    .toJSON();

  expect(wrapper).toMatchSnapshot();
});
