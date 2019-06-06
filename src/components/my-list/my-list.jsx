import Footer from "../footer/footer";
import Header from "../header/header.connect";
import InjectSvg from "../inject-svg/inject-svg";
import MovieList from "../movie-list/movie-list";

class MyList extends React.PureComponent {
  componentDidMount() {
    const {films, loadFavoriteFilmsRequest} = this.props;
    if (films === null && loadFavoriteFilmsRequest) {
      loadFavoriteFilmsRequest();
    }
  }

  renderTitle() {
    return <h1 className="page-title user-page__title">My list</h1>;
  }

  render() {
    const {films} = this.props;
    return (
      <>
        <InjectSvg/>
        <div className="user-page">
          <Header className={`user-page__head`} renderTitle={this.renderTitle}/>
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <MovieList films={films || []} activeCard={-1}/>
          </section>
          <Footer/>
        </div>
      </>
    );
  }
}

MyList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  loadFavoriteFilmsRequest: PropTypes.func
};

export default MyList;
