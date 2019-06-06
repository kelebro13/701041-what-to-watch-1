import GenreList from "../genre-list/genre-list";
import withSelectItem from "../../hoc/with-select-item/with-select-item";
import withTransformProps from "../../hoc/with-transform-props/with-transform-props";
import MovieList from "../movie-list/movie-list";
import MainHeader from "../main-header/main-header";
import Footer from "../footer/footer";
import InjectSvg from "../inject-svg/inject-svg";

const MovieListWrapped = withSelectItem(
    withTransformProps((props) => {
      return {
        ...props,
        activeCard: props.selectedItem,
        onActiveCardChange: props.onSelectedItemChange
      };
    })(MovieList));


class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeSelectedGenre = this.handleChangeSelectedGenre.bind(this);
  }

  componentDidMount() {
    const {loadFilmsRequest} = this.props;
    if (loadFilmsRequest) {
      loadFilmsRequest();
    }
  }

  handleChangeSelectedGenre(selectedGenre) {
    const {changeSelectedGenre} = this.props;
    if (changeSelectedGenre) {
      changeSelectedGenre(selectedGenre);
    }
  }

  render() {
    const {genre, genres, filmsByGenre, filmForMain, addFavoriteFilmRequest} = this.props;
    return (
      <>
        <InjectSvg/>
        <MainHeader film={filmForMain} addFavoriteFilmRequest={addFavoriteFilmRequest}/>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenreList genres={genres} activeGenre={genre} changeSelectedGenre={this.handleChangeSelectedGenre}/>
            <MovieListWrapped films={filmsByGenre}/>

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>

          <Footer isMain={true}/>
        </div>
      </>
    );
  }
}

MainPage.propTypes = {
  genre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  filmsByGenre: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  })).isRequired,
  changeSelectedGenre: PropTypes.func,
  loadFilmsRequest: PropTypes.func,
  filmForMain: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
  addFavoriteFilmRequest: PropTypes.func
};

export default MainPage;
