import InjectSvg from "../inject-svg/inject-svg";
import Header from "../header/header.connect";
import Footer from "../footer/footer";
import {filmType} from "../../types/types";
import MovieList from "../movie-list/movie-list";

class MyListPage extends React.PureComponent {
  componentDidMount() {
    const {films, loadFavoriteFilmsRequest} = this.props;
    if (films === null && loadFavoriteFilmsRequest) {
      loadFavoriteFilmsRequest();
    }
  }

  render() {
    const {films} = this.props;
    return (
      <>
        <InjectSvg/>

        <div className="user-page">
          <Header className={`user-page__head`}>
            <h1 className="page-title user-page__title">My list</h1>
          </Header>

          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <MovieList films={films || []}/>
          </section>

          <Footer isIndexPage={false}/>
        </div>
      </>
    );
  }
}

MyListPage.propTypes = {
  films: PropTypes.arrayOf(filmType),
  loadFavoriteFilmsRequest: PropTypes.func
};

export default MyListPage;
