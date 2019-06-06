import {DEFAULT_GENRE} from '../../components/genre-list/genre-list';
import {genresSelector, filmsByGenreSelector, filmForMainPageSelector} from './selectors';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.DATA;

describe(`Check genresSelector`, () => {
  it(`should return genres by films`, () => {
    const films = [
      {
        genre: `Drama`,
      },
      {
        genre: `Action`,
      },
    ];
    const genres = genresSelector({[NAME_SPACE]: {films}});
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
    const genres = genresSelector({[NAME_SPACE]: {films}});
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
    const genres = genresSelector({[NAME_SPACE]: {films}});
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
    const genres = genresSelector({[NAME_SPACE]: {films}});
    expect(genres).toEqual([DEFAULT_GENRE, `Dramas`]);
  });

  it(`should return default genres by invalid output data`, () => {
    const films = 1;
    const genres = genresSelector({[NAME_SPACE]: {films}});
    expect(genres).toEqual([DEFAULT_GENRE]);
  });

});

describe(`Check filmsByGenreSelector`, () => {
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

    const filmsByGenre = filmsByGenreSelector({[NAME_SPACE]: {genre, films}});
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

    const filmsByGenre = filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
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

    const filmsByGenre = filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
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

    const filmsByGenre = filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
    expect(filmsByGenre).toEqual(films);
  });

  it(`should return empty list if output empty data`, () => {
    const genre = DEFAULT_GENRE;
    const films = [];

    const filmsByGenre = filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
    expect(filmsByGenre).toEqual([]);
  });

  it(`should return empty list if output invalid data`, () => {
    const genre = null;
    const films = `test`;

    const filmsByGenre = filmsByGenreSelector({[NAME_SPACE]: {films, genre}});
    expect(filmsByGenre).toEqual([]);
  });
});

describe(`Check filmForMainPageSelector`, () => {
  it(`should return first not favorite film`, () => {
    const films = [
      {
        name: `Fantastic Beasts: The Crimes of Grindelwald`,
        isFavorite: true,
      },
      {
        name: `Aviator`,
        isFavorite: false,
      },
      {
        name: `We need to talk about Kevin`,
        isFavorite: true,
      }
    ];

    const filmForMainPage = filmForMainPageSelector({[NAME_SPACE]: {films}});
    expect(filmForMainPage).toEqual({
      name: `Aviator`,
      isFavorite: false,
    });
  });
});
