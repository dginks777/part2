export const reduceMovieSession = (allMovies, allMoviesSessions) => {
  if (!allMovies.length || !allMoviesSessions.length) {
    return;
  }

  return allMoviesSessions.reduce(
    (accumulator, currentValue) => [
      ...accumulator,
      {
        ...currentValue,
        movie: allMovies.find(movie => movie._id === currentValue.movie_id)
      }
    ],
    []
  );
};

export const getGenreName = id => {
  const genres = [
    "ACTION",
    "ADVENTURES",
    "COMEDY",
    "DRAMA",
    "HORROR",
    "WESTERNS"
  ];

  return genres[id] || "";
};
