import {DEFAULT_GENRE} from "../../components/genre-list/genre-list";

const initialState = {
  genre: DEFAULT_GENRE,
  films: [],
  reviews: {}
};

export const Actions = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  ADD_REVIEW_BY_FILM: `ADD_REVIEW_BY_FILM`
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

export const addReviewsByFilm = (filmId, reviews) => {
  return {
    type: Actions.ADD_REVIEW_BY_FILM,
    payload: {
      filmId,
      reviews
    }
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
    case Actions.ADD_REVIEW_BY_FILM: {
      return {
        ...state,
        reviews: {
          ...state.reviews,
          [action.payload.filmId]: action.payload.reviews
        }
      };
    }
  }
  return state;
};
