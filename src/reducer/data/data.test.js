import {Actions, changeSelectedGenre, loadFavoriteFilms, loadFilms, reducer, updateFilm} from "./data";

describe(`ActionCreators`, () => {

  it(`check return action CHANGE_GENRE`, () => {
    const newGenre = `Comedies`;
    const action = changeSelectedGenre(newGenre);

    expect(action).toEqual({
      type: Actions.CHANGE_GENRE,
      payload: newGenre
    });
  });

  it(`check return action LOAD_FILMS`, () => {
    const films = [
      {
        name: `We need to talk about Kevin`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/We_need_to_talk_about_Kevin.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/we-need-to-talk-about-kevin.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/We_need_to_talk_about_Kevin.jpg`,
        backgroundColor: `#E1DFDE`,
        description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
        rating: 7.5,
        scoresCount: 123240,
        director: `Lynne Ramsay`,
        starring: [
          `Tilda Swinton`,
          `John C. Reilly`,
          `Ezra Miller`
        ],
        runTime: 112,
        genre: `Drama`,
        released: 2011,
        id: 2,
        isFavorite: false,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        name: `The Revenant`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
        backgroundColor: `#92918B`,
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        rating: 8,
        scoresCount: 618498,
        director: `Alejandro G. Iñárritu`,
        starring: [
          `Leonardo DiCaprio`,
          `Tom Hardy`,
          `Will Poulter`
        ],
        runTime: 156,
        genre: `Action`,
        released: 2015,
        id: 3,
        isFavorite: false,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        name: `Bronson`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/bronson.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/bronson.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/bronson.jpg`,
        backgroundColor: `#73B39A`,
        description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
        rating: 7.1,
        scoresCount: 109661,
        director: `Nicolas Winding Refn`,
        starring: [
          `Tom Hardy`,
          `Kelly Adams`,
          `Luing Andrews`
        ],
        runTime: 92,
        genre: `Action`,
        released: 2008,
        id: 4,
        isFavorite: false,
        videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
    ];

    expect(loadFilms(films)).toEqual({
      type: Actions.LOAD_FILMS,
      payload: films
    });
  });

  it(`check return action UPDATE_FILM`, () => {
    const film = {
      name: `We need to talk about Kevin`,
      posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/We_need_to_talk_about_Kevin.jpg`,
      previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/we-need-to-talk-about-kevin.jpg`,
      backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/We_need_to_talk_about_Kevin.jpg`,
      backgroundColor: `#E1DFDE`,
      description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
      rating: 7.5,
      scoresCount: 123240,
      director: `Lynne Ramsay`,
      starring: [
        `Tilda Swinton`,
        `John C. Reilly`,
        `Ezra Miller`
      ],
      runTime: 112,
      genre: `Drama`,
      released: 2011,
      id: 2,
      isFavorite: false,
      videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    };

    expect(updateFilm(film)).toEqual({
      type: Actions.UPDATE_FILM,
      payload: film
    });
  });

  it(`check return action LOAD_FAVORITE_FILMS`, () => {
    const films = [
      {
        name: `We need to talk about Kevin`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/We_need_to_talk_about_Kevin.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/we-need-to-talk-about-kevin.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/We_need_to_talk_about_Kevin.jpg`,
        backgroundColor: `#E1DFDE`,
        description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
        rating: 7.5,
        scoresCount: 123240,
        director: `Lynne Ramsay`,
        starring: [
          `Tilda Swinton`,
          `John C. Reilly`,
          `Ezra Miller`
        ],
        runTime: 112,
        genre: `Drama`,
        released: 2011,
        id: 2,
        isFavorite: true,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        name: `The Revenant`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
        backgroundColor: `#92918B`,
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        rating: 8,
        scoresCount: 618498,
        director: `Alejandro G. Iñárritu`,
        starring: [
          `Leonardo DiCaprio`,
          `Tom Hardy`,
          `Will Poulter`
        ],
        runTime: 156,
        genre: `Action`,
        released: 2015,
        id: 3,
        isFavorite: true,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }
    ];

    expect(loadFavoriteFilms(films)).toEqual({
      type: Actions.LOAD_FAVORITE_FILMS,
      payload: films
    });
  });
});

describe(`reducer`, () => {
  const initialState = {
    genre: `All genres`,
    films: [],
    favoriteFilms: null
  };

  it(`should set correct genre`, () => {
    const genre = `Dramas`;

    const store = reducer(initialState, changeSelectedGenre(genre));

    expect(store).toEqual({
      ...initialState,
      genre
    });
  });

  it(`should set loaded films`, () => {
    const films = [
      {
        name: `We need to talk about Kevin`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/We_need_to_talk_about_Kevin.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/we-need-to-talk-about-kevin.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/We_need_to_talk_about_Kevin.jpg`,
        backgroundColor: `#E1DFDE`,
        description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
        rating: 7.5,
        scoresCount: 123240,
        director: `Lynne Ramsay`,
        starring: [
          `Tilda Swinton`,
          `John C. Reilly`,
          `Ezra Miller`
        ],
        runTime: 112,
        genre: `Drama`,
        released: 2011,
        id: 2,
        isFavorite: false,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        name: `The Revenant`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
        backgroundColor: `#92918B`,
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        rating: 8,
        scoresCount: 618498,
        director: `Alejandro G. Iñárritu`,
        starring: [
          `Leonardo DiCaprio`,
          `Tom Hardy`,
          `Will Poulter`
        ],
        runTime: 156,
        genre: `Action`,
        released: 2015,
        id: 3,
        isFavorite: false,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        name: `Bronson`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/bronson.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/bronson.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/bronson.jpg`,
        backgroundColor: `#73B39A`,
        description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
        rating: 7.1,
        scoresCount: 109661,
        director: `Nicolas Winding Refn`,
        starring: [
          `Tom Hardy`,
          `Kelly Adams`,
          `Luing Andrews`
        ],
        runTime: 92,
        genre: `Action`,
        released: 2008,
        id: 4,
        isFavorite: false,
        videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
    ];
    const store = reducer(initialState, {
      type: Actions.LOAD_FILMS,
      payload: films
    });

    expect(store).toEqual({
      ...initialState,
      films
    });
  });

  it(`should update film`, () => {
    const firstFilm = {
      name: `We need to talk about Kevin`,
      posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/We_need_to_talk_about_Kevin.jpg`,
      previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/we-need-to-talk-about-kevin.jpg`,
      backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/We_need_to_talk_about_Kevin.jpg`,
      backgroundColor: `#E1DFDE`,
      description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
      rating: 7.5,
      scoresCount: 123240,
      director: `Lynne Ramsay`,
      starring: [
        `Tilda Swinton`,
        `John C. Reilly`,
        `Ezra Miller`
      ],
      runTime: 112,
      genre: `Drama`,
      released: 2011,
      id: 2,
      isFavorite: false,
      videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    };

    const secondFilm = {
      name: `The Revenant`,
      posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
      previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
      backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
      backgroundColor: `#92918B`,
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
      rating: 8,
      scoresCount: 618498,
      director: `Alejandro G. Iñárritu`,
      starring: [
        `Leonardo DiCaprio`,
        `Tom Hardy`,
        `Will Poulter`
      ],
      runTime: 156,
      genre: `Action`,
      released: 2015,
      id: 3,
      isFavorite: false,
      videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    };

    const updateSecondFilm = {
      ...secondFilm,
      isFavorite: true
    };

    const store = reducer({...initialState, films: [firstFilm, secondFilm]}, {
      type: Actions.UPDATE_FILM,
      payload: updateSecondFilm
    });

    expect(store).toEqual({
      ...initialState,
      films: [firstFilm, updateSecondFilm],
      favoriteFilms: null
    });
  });

  it(`should set loaded favorite films`, () => {
    const favoriteFilms = [
      {
        name: `We need to talk about Kevin`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/We_need_to_talk_about_Kevin.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/we-need-to-talk-about-kevin.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/We_need_to_talk_about_Kevin.jpg`,
        backgroundColor: `#E1DFDE`,
        description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
        rating: 7.5,
        scoresCount: 123240,
        director: `Lynne Ramsay`,
        starring: [
          `Tilda Swinton`,
          `John C. Reilly`,
          `Ezra Miller`
        ],
        runTime: 112,
        genre: `Drama`,
        released: 2011,
        id: 2,
        isFavorite: true,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        name: `The Revenant`,
        posterImage: `https://es31-server.appspot.com/wtw/static/film/poster/Revenant.jpg`,
        previewImage: `https://es31-server.appspot.com/wtw/static/film/preview/revenant.jpg`,
        backgroundImage: `https://es31-server.appspot.com/wtw/static/film/background/Revenant.jpg`,
        backgroundColor: `#92918B`,
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        rating: 8,
        scoresCount: 618498,
        director: `Alejandro G. Iñárritu`,
        starring: [
          `Leonardo DiCaprio`,
          `Tom Hardy`,
          `Will Poulter`
        ],
        runTime: 156,
        genre: `Action`,
        released: 2015,
        id: 3,
        isFavorite: true,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }
    ];
    const store = reducer(initialState, {
      type: Actions.LOAD_FAVORITE_FILMS,
      payload: favoriteFilms
    });

    expect(store).toEqual({
      ...initialState,
      favoriteFilms
    });
  });

  it(`should return the initial state`, () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
