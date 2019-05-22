import {initialState, reducer, ActionCreators, Actions} from "./reducer";
import {getFilmsByGenre} from "./components/app/app-utils";
import {DEFAULT_GENRE} from "./components/genre-list/genre-list";

describe(`reducer`, () => {
  it(`should correct process action CHANGE_GENRE`, () => {
    const newGenre = `Comedies`;
    const actionCreator = ActionCreators[Actions.CHANGE_GENRE];
    const store = reducer(initialState, actionCreator(newGenre));

    expect(store).toEqual({
      ...initialState,
      genre: newGenre
    });
  });

  it(`should set correct films by genre`, () => {
    const genre = `Dramas`;
    const films = [
      {
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Kids & Family`,
        posterSrc: ``,
        sources: {
          mp4: ``,
          webm: ``
        }
      },
      {
        title: `Aviator`,
        genre: `Dramas`,
        posterSrc: ``,
        sources: {
          mp4: ``,
          webm: ``
        }
      },
      {
        title: `We need to talk about Kevin`,
        genre: `Dramas`,
        posterSrc: ``,
        sources: {
          mp4: ``,
          webm: ``
        }
      }
    ];

    const actionCreator = ActionCreators[Actions.SET_FILMS_BY_GENRE];
    const store = reducer(initialState, actionCreator(genre, films));

    expect(store).toEqual({
      ...initialState,
      filmsByGenre: [
        {
          title: `Aviator`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `We need to talk about Kevin`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        }
      ]
    });
  });

  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});

describe(`ActionCreators`, () => {
  describe(`check CHANGE_GENRE`, () => {
    it(`check return action`, () => {
      const newGenre = `Comedies`;
      const actionCreator = ActionCreators[Actions.CHANGE_GENRE];
      const action = actionCreator(newGenre);

      expect(action).toEqual({
        type: Actions.CHANGE_GENRE,
        payload: newGenre
      });
    });
  });

  describe(`check SET_FILMS_BY_GENRE`, () => {
    it(`should return films only certain genre`, () => {
      const genre = `Dramas`;
      const films = [
        {
          title: `Fantastic Beasts: The Crimes of Grindelwald`,
          genre: `Kids & Family`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `Aviator`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `We need to talk about Kevin`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        }
      ];

      const actionCreator = ActionCreators[Actions.SET_FILMS_BY_GENRE];
      const action = actionCreator(genre, films);

      expect(action).toEqual({
        type: Actions.SET_FILMS_BY_GENRE,
        payload: [
          {
            title: `Aviator`,
            genre: `Dramas`,
            posterSrc: ``,
            sources: {
              mp4: ``,
              webm: ``
            }
          },
          {
            title: `We need to talk about Kevin`,
            genre: `Dramas`,
            posterSrc: ``,
            sources: {
              mp4: ``,
              webm: ``
            }
          }
        ]
      });
    });

    it(`should return all films by default genre`, () => {
      const genre = DEFAULT_GENRE;
      const films = [
        {
          title: `Fantastic Beasts: The Crimes of Grindelwald`,
          genre: `Kids & Family`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `Aviator`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `We need to talk about Kevin`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        }
      ];

      const actionCreator = ActionCreators[Actions.SET_FILMS_BY_GENRE];
      const action = actionCreator(genre, films);

      expect(action).toEqual({
        type: Actions.SET_FILMS_BY_GENRE,
        payload: films
      });
    });

    it(`should return all films by empty genre`, () => {
      const genre = ``;
      const films = [
        {
          title: `Fantastic Beasts: The Crimes of Grindelwald`,
          genre: `Kids & Family`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `Aviator`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `We need to talk about Kevin`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        }
      ];

      const actionCreator = ActionCreators[Actions.SET_FILMS_BY_GENRE];
      const action = actionCreator(genre, films);

      expect(action).toEqual({
        type: Actions.SET_FILMS_BY_GENRE,
        payload: films
      });
    });

    it(`should return all films by invalid genre`, () => {
      const genre = null;
      const films = [
        {
          title: `Fantastic Beasts: The Crimes of Grindelwald`,
          genre: `Kids & Family`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `Aviator`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        },
        {
          title: `We need to talk about Kevin`,
          genre: `Dramas`,
          posterSrc: ``,
          sources: {
            mp4: ``,
            webm: ``
          }
        }
      ];

      const actionCreator = ActionCreators[Actions.SET_FILMS_BY_GENRE];
      const action = actionCreator(genre, films);

      expect(action).toEqual({
        type: Actions.SET_FILMS_BY_GENRE,
        payload: films
      });
    });

    it(`should return empty list if output empty data`, () => {
      const genre = DEFAULT_GENRE;
      const films = [];

      const actionCreator = ActionCreators[Actions.SET_FILMS_BY_GENRE];
      const action = actionCreator(genre, films);

      expect(action).toEqual({
        type: Actions.SET_FILMS_BY_GENRE,
        payload: []
      });
    });

    it(`should return empty list if output invalid data`, () => {
      const genre = null;
      const films = `test`;

      const actionCreator = ActionCreators[Actions.SET_FILMS_BY_GENRE];
      const action = actionCreator(genre, films);

      expect(action).toEqual({
        type: Actions.SET_FILMS_BY_GENRE,
        payload: []
      });
    });
  });
});
