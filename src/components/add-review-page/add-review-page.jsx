import InjectSvg from "../inject-svg/inject-svg";
import Header from "../header/header.connect";
import AddReviewForm from "../add-review-form/add-review-form.connect";
import {filmType} from "../../types/types";


const AddReviewPage = (props) => {
  const {film} = props;
  return (
    <>
      <InjectSvg/>
      <section className="movie-card movie-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{film.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218"
              height="327"/>
          </div>
        </div>
        <AddReviewForm filmId={film.id}/>
      </section>
    </>
  );
};

AddReviewPage.propTypes = {
  film: filmType
};

export default AddReviewPage;
