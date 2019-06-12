import renderer from "react-test-renderer";
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import MockAdapter from "axios-mock-adapter";
import configureAPI from '../../api/api';
import NameSpace from "../../reducer/name-spaces";
import RoutePath from "../../routes";
import SingInPage from "../sing-in-page/sing-in-page";
import MyListPage from "../my-list-page/my-list-page";
import MainPage from "../main-page/main-page";
import {DEFAULT_GENRE} from "../genre-list/genre-list";
import MoviePage from "../movie-page/movie-page";
import App from "./app";

describe(`App`, () => {
  const api = configureAPI();
  const apiMock = new MockAdapter(api);

  apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

  apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  const store = {
    [NameSpace.DATA]: {
      genre: DEFAULT_GENRE,
      films: [
        {
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
        },
        {
          name: `The Revenant`,
          posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
          previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
          backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
          backgroundColor: `#92918B`,
          description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
          rating: 8,
          scoresCount: 618498,
          director: `Alejandro G. Iñárritu`,
          starring: [
            `Leonardo DiCaprio`,
            `Tom Hardy`,
            `Will Poulter`
          ],
          runTime: 156,
          genre: `Action`,
          released: 2015,
          id: 3,
          isFavorite: false,
          videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
          previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        },
        {
          name: `Bronson`,
          posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/bronson.jpg`,
          previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/bronson.jpg`,
          backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/bronson.jpg`,
          backgroundColor: `#73B39A`,
          description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
          rating: 7.1,
          scoresCount: 109661,
          director: `Nicolas Winding Refn`,
          starring: [
            `Tom Hardy`,
            `Kelly Adams`,
            `Luing Andrews`
          ],
          runTime: 92,
          genre: `Action`,
          released: 2008,
          id: 4,
          isFavorite: false,
          videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
          previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        },
      ]
    },
    [NameSpace.USER]: {
      isAuthorizationRequired: false
    }
  };

  it(`renders properly`, () => {
    const tree = renderer
      .create(
          <Provider store={mockStore(store)}>
            <MemoryRouter>
              <App isAuthorizationRequired={false}/>
            </MemoryRouter>
          </Provider>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render App if path '/'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[RoutePath.INDEX]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(MainPage)).toHaveLength(1);
  });

  it(`should render SingIn if path '/login'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[RoutePath.LOGIN]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(SingInPage)).toHaveLength(1);
  });

  it(`should render MyList if path '/mylist'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[RoutePath.MY_LIST]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(MyListPage)).toHaveLength(1);
  });

  it(`should render MoviePageDetails if path '/film/:id'`, () => {
    const tree = mount(
        <Provider store={mockStore(store)}>
          <MemoryRouter initialEntries={[`${RoutePath.FILM}/2`]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );

    expect(tree.find(MoviePage)).toHaveLength(1);
  });
});
