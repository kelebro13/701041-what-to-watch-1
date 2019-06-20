import * as Utils from './movie-utils';
import {getDateToString} from "./movie-utils";

describe(`getRatingLevel`, () => {
  it(`should return BAD level if rating less 3`, () => {
    expect(Utils.getRatingLevel(2)).toEqual(Utils.Level.BAD);
  });

  it(`should return NORMAL level if rating less 5`, () => {
    expect(Utils.getRatingLevel(4)).toEqual(Utils.Level.NORMAL);
  });

  it(`should return GOOD level if rating less 8`, () => {
    expect(Utils.getRatingLevel(7)).toEqual(Utils.Level.GOOD);
  });

  it(`should return VERY_GOOD level if rating less 10 `, () => {
    expect(Utils.getRatingLevel(9)).toEqual(Utils.Level.VERY_GOOD);
  });

  it(`should return AWESOME level if rating is 10 `, () => {
    expect(Utils.getRatingLevel(10)).toEqual(Utils.Level.AWESOME);
  });

  it(`should return NORMAL level if argument invalid`, () => {
    expect(Utils.getRatingLevel(`test`)).toEqual(Utils.Level.UNKNOWN);
  });
});

describe(`getMovieStarring`, () => {
  it(`should return correct string if actors is 3`, () => {
    const starring = [`Bill Murray`, `Edward Norton`, `Jude Law`];

    expect(Utils.getMovieStarring(starring)).toEqual(
        `Starring: Bill Murray, Edward Norton, Jude Law.`
    );
  });

  it(`should return correct string if actors more than 3`, () => {
    const starring = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`];

    expect(Utils.getMovieStarring(starring)).toEqual(
        `Starring: Bill Murray, Edward Norton, Jude Law and other.`
    );
  });

  it(`should return NORMAL level if argument invalid`, () => {
    expect(Utils.getMovieStarring(`test`)).toEqual(``);
  });
});

describe(`getTime`, () => {
  it(`should return correct time`, () => {
    expect(Utils.getTime(132)).toEqual(`2h 12m`);
  });

  it(`should return current argument if it invalid`, () => {
    expect(Utils.getTime(`test`)).toEqual(`test`);
  });

  it(`should return current argument if it negative`, () => {
    expect(Utils.getTime(-132)).toEqual(-132);
  });
});

describe(`getDateToString`, () => {
  it(`should return correct date`, () => {
    const date = `2019-05-31T19:33:44.642Z`;

    expect(getDateToString(date)).toEqual(`May 31, 2019`);
  });

  it(`should return empty string if invalid date`, () => {
    const date = `test`;
    expect(getDateToString(date)).toEqual(``);
  });

  it(`should return empty string if incorrect format date`, () => {
    const date = undefined;
    expect(getDateToString(date)).toEqual(``);
  });
});
