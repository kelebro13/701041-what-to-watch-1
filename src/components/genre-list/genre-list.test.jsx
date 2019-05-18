import renderer from "react-test-renderer";
import GenreList from "./genre-list";

it(`render correctly GenreList component`, () => {
  const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
  const activeGenre = `All genres`;
  const onSelectedGenreChange = () => {};

  const tree = renderer
    .create(<GenreList genres={genres} activeGenre={activeGenre} onSelectedGenreChange={onSelectedGenreChange}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
