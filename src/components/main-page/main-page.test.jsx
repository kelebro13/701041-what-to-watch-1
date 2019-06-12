import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom';
import MainPage from "./main-page";

it(`render correctly App component`, () => {
  const genre = `All genres`;
  const genres = [`All genres`, `Kids & Family`, `Comedies`];
  const films = [
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
  ];

  const tree = renderer
    .create(
        <MemoryRouter>
          <MainPage genre={genre} genres={genres} filmsByGenre={films} film={films[0]} changeSelectedGenre={() => {}} setFilmsByGenre={() => {}}/>
        </MemoryRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
