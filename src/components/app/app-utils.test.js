import {DEFAULT_GENRE} from '../genre-list/genre-list';
import {getGenres, getFilmsByGenre} from './app-utils';

describe(`Check getGenres`, () => {
  it(`should return genres by films`, () => {
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
        title: `Johnny English`,
        genre: `Comedies`,
        posterSrc: ``,
        sources: {
          mp4: ``,
          webm: ``
        }
      }
    ];
    const genres = getGenres(films);
    expect(genres).toEqual([DEFAULT_GENRE, `Kids & Family`, `Comedies`]);
  });

  it(`should return genres without double`, () => {
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
    const genres = getGenres(films);
    expect(genres).toEqual([DEFAULT_GENRE, `Kids & Family`, `Dramas`]);
  });

  it(`should return genres without empty genre`, () => {
    const films = [
      {
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: ``, // empty genre
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
      }
    ];
    const genres = getGenres(films);
    expect(genres).toEqual([DEFAULT_GENRE, `Dramas`]);
  });

  it(`should return valid genres by invalid genre`, () => {
    const films = [
      {
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        genre: undefined, // invalid genres
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
      }
    ];
    const genres = getGenres(films);
    expect(genres).toEqual([DEFAULT_GENRE, `Dramas`]);
  });

  it(`should return default genres by invalid output data`, () => {
    const films = 1;
    const genres = getGenres(films);
    expect(genres).toEqual([DEFAULT_GENRE]);
  });

});

describe(`Check getFilmsByGenre`, () => {
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

    const filmsByGenre = getFilmsByGenre(genre, films);
    expect(filmsByGenre).toHaveLength(2);
    expect(filmsByGenre[0].title).toEqual(`Aviator`);
    expect(filmsByGenre[1].title).toEqual(`We need to talk about Kevin`);
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

    const filmsByGenre = getFilmsByGenre(genre, films);
    expect(filmsByGenre).toEqual(films);
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

    const filmsByGenre = getFilmsByGenre(genre, films);
    expect(filmsByGenre).toEqual(films);
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

    const filmsByGenre = getFilmsByGenre(genre, films);
    expect(filmsByGenre).toEqual(films);
  });

  it(`should return empty list if output empty data`, () => {
    const genre = DEFAULT_GENRE;
    const films = [];

    const filmsByGenre = getFilmsByGenre(genre, films);
    expect(filmsByGenre).toEqual([]);
  });

  it(`should return empty list if output invalid data`, () => {
    const genre = null;
    const films = `test`;

    const filmsByGenre = getFilmsByGenre(genre, films);
    expect(filmsByGenre).toEqual([]);
  });
});
