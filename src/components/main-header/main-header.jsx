import Header from "../header/header.connect";

const MainHeader = (props) => {
  const {film, addFavoriteFilmRequest} = props;

  const handleAddButtonClick = () => {
    if (addFavoriteFilmRequest) {
      addFavoriteFilmRequest(film.id, 1);
    }
  };

  const renderHeader = () => <>
    <h1 className="visually-hidden">WTW</h1>
    <Header isMain={true} className={`movie-card__head`}/>
    </>;

  const renderFilm = () => film && (
    <>
      <div className="movie-card__bg">
        <img src={film.backgroundImage} alt="The Grand Budapest Hotel"/>
      </div>

      {renderHeader()}

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={film.posterImage} alt={film.name} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" onClick={handleAddButtonClick}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className="movie-card">
      {film ? renderFilm() : renderHeader()}
    </section>
  );
};

MainHeader.propTypes = {
  film: PropTypes.shape({
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

export default MainHeader;
