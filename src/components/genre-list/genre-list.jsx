import CustomButton from "../custom-button/custom-button";

export const DEFAULT_GENRE = `All genres`;

const GenreList = (props) => {
  const {genres, activeGenre, changeSelectedGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li key={index} className={`catalog__genres-item${genre === activeGenre ? ` catalog__genres-item--active` : ``}`}>
            <CustomButton className={`catalog__genres-link`} title={genre} onClick={changeSelectedGenre}/>
          </li>
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeSelectedGenre: PropTypes.func.isRequired
};

export default GenreList;
