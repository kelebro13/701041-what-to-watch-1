export const DEFAULT_GENRE = `All Genres`;

const GenreList = ({genres = []}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li key={index} className={`catalog__genres-item ${index === 0 ? `catalog__genres-item--active` : ``}`}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenreList;
