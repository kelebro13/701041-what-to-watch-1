import {DEFAULT_GENRE} from "../../components/genre-list/genre-list";

const initialState = {
  genre: DEFAULT_GENRE,
  films: null,
  favoriteFilms: null,
  reviews: {},
  promoFilmId: -1
};

export const Actions = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_REVIEWS_BY_FILM: `LOAD_REVIEWS_BY_FILM`,
  UPDATE_FAVORITE_FILM: `UPDATE_FAVORITE_FILM`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`
};

export const changeSelectedGenre = (genreType) => {
  return {
    type: Actions.CHANGE_GENRE,
    payload: genreType
  };
};

export const loadFilms = (films) => {
  return {
    type: Actions.LOAD_FILMS,
    payload: films
  };
};

export const loadReviewsByFilm = (filmId, reviews) => {
  return {
    type: Actions.LOAD_REVIEWS_BY_FILM,
    payload: {
      filmId,
      reviews
    }
  };
};

export const loadPromoFilm = (film) => {
  return {
    type: Actions.LOAD_PROMO_FILM,
    payload: film
  };
};

export const updateFavoriteFilm = (film) => {
  return {
    type: Actions.UPDATE_FAVORITE_FILM,
    payload: film
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_GENRE: {
      return {
        ...state,
        genre: action.payload
      };
    }
    case Actions.LOAD_FILMS: {
      return {
        ...state,
        genre: DEFAULT_GENRE,
        films: action.payload
      };
    }
    case Actions.LOAD_REVIEWS_BY_FILM: {
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.filmId]: action.payload.reviews
        }
      };
    }
    case Actions.LOAD_PROMO_FILM: {
      return {
        ...state,
        promoFilmId: action.payload.id,
        films: state.films.map((film) => {
          if (film.id === action.payload.id) {
            return action.payload;
          }
          return film;
        })
      };
    }
    case Actions.UPDATE_FAVORITE_FILM: {
      return {
        ...state,
        films: state.films.map((film) => {
          if (film.id === action.payload.id) {
            return action.payload;
          }
          return film;
        }),
        favoriteFilms: null
      };
    }
  }
  return state;
};
