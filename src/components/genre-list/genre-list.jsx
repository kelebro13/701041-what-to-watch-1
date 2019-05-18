import {connect} from "react-redux";
import {ActionCreators, CHANGE_GENRE} from "../../reducer";
import CustomLink from "../custom-link/custom-link";

export const DEFAULT_GENRE = `All genres`;

const GenreList = (props) => {
  const {genres, activeGenre, onSelectedGenreChange} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (
          <li key={index} className={`catalog__genres-item${genre === activeGenre ? ` catalog__genres-item--active` : ``}`}>
            <CustomLink title={genre} onLinkClick={onSelectedGenreChange}/>
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
export {GenreList};

const mapStateToProps = (state) => {
  return {activeGenre: state.genre};
};

const mapDispatchToProps = (dispatch) => {
  const changeGenre = ActionCreators[CHANGE_GENRE];
  return {
    onSelectedGenreChange: (genre) => {
      dispatch(changeGenre(genre));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
