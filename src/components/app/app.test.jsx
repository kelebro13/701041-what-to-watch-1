import renderer from "react-test-renderer";
import App from "./app";

it(`render correctly App component`, () => {
  const genre = `All genres`;
  const genres = [`All genres`, `Kids & Family`, `Comedies`];
  const films = [
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
  ];

  const tree = renderer
    .create(<App genre={genre} genres={genres} films={films} filmsByGenre={films} changeSelectedGenre={jest.fn()} setFilmsByGenre={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

