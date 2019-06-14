import {Actions, changeSelectedGenre, loadFilms, reducer, loadReviewsByFilm} from "./data";

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

  it(`check return action LOAD_REVIEWS_BY_FILM`, () => {
    const filmId = 1;
    const reviews = [
      {
        id: 1,
        user: {
          id: 4,
          name: `Kate Muir`,
        },
        rating: 8.9,
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2019-05-08T14:13:56.569Z`
      }
    ];
    const action = loadReviewsByFilm(filmId, reviews);

    expect(action).toEqual({
      type: Actions.LOAD_REVIEWS_BY_FILM,
      payload: {
        filmId,
        reviews
      }
    });
  });
});

describe(`reducer`, () => {
  const initialState = {
    genre: `All genres`,
    films: []
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

  it(`should set loaded comments by film`, () => {
    const filmId = 1;
    const reviews = [
      {
        id: 1,
        user: {
          id: 4,
          name: `Kate Muir`,
        },
        rating: 8.9,
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2019-05-08T14:13:56.569Z`
      }
    ];

    const store = reducer(initialState, loadReviewsByFilm(filmId, reviews));

    expect(store).toEqual({
      ...initialState,
      reviews: {
        [filmId]: reviews
      }
    });
  });

  it(`should return the initial state`, () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
