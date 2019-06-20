import {DEFAULT_GENRE} from '../../components/genre-list/genre-list';
import * as Selectors from './selectors';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

describe(`genreSelector`, () => {
  it(`should return genre from store if call without genre paremeter`, () => {
    const genres = Selectors.genreSelector({[NAME_SPACE]: {genre: `Drama`}});
    expect(genres).toEqual(`Drama`);
  });

  it(`should return genre parameter`, () => {
    const genres = Selectors.genreSelector({[NAME_SPACE]: {genre: `Drama`}}, `Action`);
    expect(genres).toEqual(`Action`);
  });
});

describe(`genresSelector`, () => {
  it(`should return genres by films`, () => {
    const films = [
      {
        genre: `Drama`,
      },
      {
        genre: `Action`,
      },
    ];
    const genres = Selectors.genresSelector({[NAME_SPACE]: {films}});
    expect(genres).toEqual([DEFAULT_GENRE, `Drama`, `Action`]);
  });

  it(`should return genres without double`, () => {
    const films = [
      {
        genre: `Drama`,
      },
      {
        genre: `Action`,
      },
      {
        genre: `Action`,
      },
    ];
    const genres = Selectors.genresSelector({[NAME_SPACE]: {films}});
    expect(genres).toEqual([DEFAULT_GENRE, `Drama`, `Action`]);
  });

  it(`should return genres without empty genre`, () => {
    const films = [
      {
        genre: ``, // empty genre
      },
      {
        genre: `Dramas`,
      }
    ];
    const genres = Selectors.genresSelector({[NAME_SPACE]: {films}});
    expect(genres).toEqual([DEFAULT_GENRE, `Dramas`]);
  });

  it(`should return valid genres by invalid genre`, () => {
    const films = [
      {
        genre: undefined, // invalid genres
      },
      {
        genre: `Dramas`,
      }
    ];
    const genres = Selectors.genresSelector({[NAME_SPACE]: {films}});
    expect(genres).toEqual([DEFAULT_GENRE, `Dramas`]);
  });

  it(`should return default genres by invalid output data`, () => {
    const films = 1;
    const genres = Selectors.genresSelector({[NAME_SPACE]: {films}});
    expect(genres).toEqual([DEFAULT_GENRE]);
  });

});

describe(`filmsByGenreSelector`, () => {
  it(`should return films only certain genre`, () => {
    const genre = `Dramas`;
    const films = [
      {
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Kids & Family`,
      },
      {
        name: `Aviator`,
        genre: `Dramas`,
      },
      {
        name: `We need to talk about Kevin`,
        genre: `Dramas`,
      }
    ];

    const filmsByGenre = Selectors.filmsByGenreSelector({[NAME_SPACE]: {genre, films}});
    expect(filmsByGenre).toHaveLength(2);
    expect(filmsByGenre[0].name).toEqual(`Aviator`);
    expect(filmsByGenre[1].name).toEqual(`We need to talk about Kevin`);
  });

  it(`should return all films by default genre`, () => {
    const genre = DEFAULT_GENRE;
    const films = [
      {
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Kids & Family`,
      },
      {
        name: `Aviator`,
        genre: `Dramas`,
      },
      {
        name: `We need to talk about Kevin`,
        genre: `Dramas`,
      }
    ];

    const filmsByGenre = Selectors.filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
    expect(filmsByGenre).toEqual(films);
  });

  it(`should return all films by empty genre`, () => {
    const genre = ``;
    const films = [
      {
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Kids & Family`,
      },
      {
        name: `Aviator`,
        genre: `Dramas`,
      },
      {
        name: `We need to talk about Kevin`,
        genre: `Dramas`,
      }
    ];

    const filmsByGenre = Selectors.filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
    expect(filmsByGenre).toEqual(films);
  });

  it(`should return all films by invalid genre`, () => {
    const genre = null;
    const films = [
      {
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: `Kids & Family`,
      },
      {
        name: `Aviator`,
        genre: `Dramas`,
      },
      {
        name: `We need to talk about Kevin`,
        genre: `Dramas`,
      }
    ];

    const filmsByGenre = Selectors.filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
    expect(filmsByGenre).toEqual(films);
  });

  it(`should return empty list if output empty data`, () => {
    const genre = DEFAULT_GENRE;
    const films = [];

    const filmsByGenre = Selectors.filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
    expect(filmsByGenre).toEqual([]);
  });

  it(`should return empty list if output invalid data`, () => {
    const genre = null;
    const films = `test`;

    const filmsByGenre = Selectors.filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
    expect(filmsByGenre).toEqual([]);
  });
});

describe(`filmSelector`, () => {
  it(`should return film by id`, () => {
    const films = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];

    expect(Selectors.filmSelector({[NAME_SPACE]: {films}}, 2)).toEqual({
      id: 2
    });
  });

  it(`should return null if id invalid`, () => {
    const films = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];

    expect(Selectors.filmSelector({[NAME_SPACE]: {films}}, 4)).toEqual(null);
  });

  it(`should return null if films empty`, () => {
    expect(Selectors.filmSelector({[NAME_SPACE]: {films: []}}, 1)).toEqual(null);
  });
});

describe(`similarFilmsSelector`, () => {
  it(`should return films with the same genre, but without the current`, () => {
    const currentFilm = {
      id: 2,
      genre: `Action`,
    };
    const films = [
      {
        id: 1,
        genre: `Drama`,
      },
      currentFilm,
      {
        id: 3,
        genre: `Action`,
      }
    ];
    expect(Selectors.similarFilmsSelector({[NAME_SPACE]: {films}}, currentFilm)).toEqual([
      {
        id: 3,
        genre: `Action`,
      }
    ]);
  });
});

describe(`promoFilmSelector`, () => {
  it(`should return film by promoFilmId`, () => {
    const films = [
      {
        id: 1
      },
      {
        id: 2
      }
    ];
    expect(Selectors.promoFilmSelector({[NAME_SPACE]: {films, promoFilmId: 2}})).toEqual({id: 2});
  });

  it(`should return film by promoFilmId`, () => {
    const films = [
      {
        id: 1
      },
      {
        id: 2
      }
    ];
    expect(Selectors.promoFilmSelector({[NAME_SPACE]: {films, promoFilmId: -1}})).toEqual(undefined);
  });
});

describe(`reviewByFilmSelector`, () => {
  it(`should return sort review (first new)`, () => {
    const filmId = 1;
    const firstReview = {
      id: 1,
      date: `2018-05-08T14:13:56.569Z`
    };
    const secondReview = {
      id: 2,
      date: `2019-05-09T14:13:56.569Z`
    };
    const store = {
      [NAME_SPACE]: {
        reviews: {
          [filmId]: [
            firstReview, secondReview
          ]
        }
      }
    };


    expect(Selectors.reviewsByFilmSelector(store, filmId)).toEqual([
      secondReview, firstReview
    ]);
  });

  it(`should return undefined if reviews by film empty`, () => {
    const filmId = 1;
    const firstReview = {
      id: 1,
      date: `2019-05-08T14:13:56.569Z`
    };
    const secondReview = {
      id: 2,
      date: `2019-05-09T14:13:56.569Z`
    };
    const store = {
      [NAME_SPACE]: {
        reviews: {
          [2]: [
            firstReview, secondReview
          ]
        }
      }
    };


    expect(Selectors.reviewsByFilmSelector(store, filmId)).toEqual(undefined);
  });
});
