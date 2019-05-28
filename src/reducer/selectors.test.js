import {DEFAULT_GENRE} from '../components/genre-list/genre-list';
import {getGenres} from './selectors';

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
    const genres = getGenres({films});
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
    const genres = getGenres({films});
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
    const genres = getGenres({films});
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
    const genres = getGenres({films});
    expect(genres).toEqual([DEFAULT_GENRE, `Dramas`]);
  });

  it(`should return default genres by invalid output data`, () => {
    const films = 1;
    const genres = getGenres({films});
    expect(genres).toEqual([DEFAULT_GENRE]);
  });

});
