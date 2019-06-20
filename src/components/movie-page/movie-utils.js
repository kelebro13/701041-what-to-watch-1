export const Level = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
  UNKNOWN: `Unknown`
};

export const getRatingLevel = (rating) => {
  if (typeof rating !== `number`) {
    return Level.UNKNOWN;
  }

  if (rating < 3) {
    return Level.BAD;
  } else if (rating < 5) {
    return Level.NORMAL;
  } else if (rating < 8) {
    return Level.GOOD;
  } else if (rating < 10) {
    return Level.VERY_GOOD;
  }
  return Level.AWESOME;
};

export const getMovieStarring = (starring) => {
  if (Array.isArray(starring)) {
    if (starring.length === 3) {
      return `Starring: ${starring.join(`, `)}.`;
    }
    return `Starring: ${starring.slice(0, 3).join(`, `)} and other.`;
  }

  return ``;
};

export const getTime = (runTime) => {
  if (typeof runTime === `number` && runTime > 0) {
    const hour = Math.trunc(runTime / 60);
    const minutes = runTime % 60;
    if (hour > 0) {
      return `${hour}h ${minutes}m`;
    }
    return `${minutes}m`;
  }

  return runTime;
};

const months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`];

export const getDateToString = (date) => {
  const currentDate = new Date(date);
  if (isNaN(currentDate.getTime()) || date === null) {
    return ``;
  }
  return `${months[currentDate.getUTCMonth()]} ${currentDate.getUTCDate()}, ${currentDate.getUTCFullYear()}`;
};
