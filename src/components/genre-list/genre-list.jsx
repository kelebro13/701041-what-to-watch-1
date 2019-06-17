import CustomLink from "../custom-link/custom-link";

export const DEFAULT_GENRE = `All genres`;

const GenreList = (props) => {
  const {genres, activeGenre, onSelectedGenreChange} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li key={index} className={`catalog__genres-item${genre === activeGenre ? ` catalog__genres-item--active` : ``}`}>
            <CustomLink className={`catalog__genres-link`} title={genre} onClick={onSelectedGenreChange}/>
          </li>
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired
};

export default GenreList;
