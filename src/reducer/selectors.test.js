import {DEFAULT_GENRE} from '../components/genre-list/genre-list';
import {genresSelector, filmsByGenreSelector} from './selectors';

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
    const genres = genresSelector({films});
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
    const genres = genresSelector({films});
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
    const genres = genresSelector({films});
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
    const genres = genresSelector({films});
    expect(genres).toEqual([DEFAULT_GENRE, `Dramas`]);
  });

  it(`should return default genres by invalid output data`, () => {
    const films = 1;
    const genres = genresSelector({films});
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

    const filmsByGenre = filmsByGenreSelector({genre, films});
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

    const filmsByGenre = filmsByGenreSelector({genre, films});
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

    const filmsByGenre = filmsByGenreSelector({genre, films});
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

    const filmsByGenre = filmsByGenreSelector({genre, films});
    expect(filmsByGenre).toEqual(films);
  });

  it(`should return empty list if output empty data`, () => {
    const genre = DEFAULT_GENRE;
    const films = [];

    const filmsByGenre = filmsByGenreSelector({genre, films});
    expect(filmsByGenre).toEqual([]);
  });

  it(`should return empty list if output invalid data`, () => {
    const genre = null;
    const films = `test`;

    const filmsByGenre = filmsByGenreSelector({genre, films});
    expect(filmsByGenre).toEqual([]);
  });
});
