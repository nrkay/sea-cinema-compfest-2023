export const SELECT_MOVIE = "SELECT_MOVIE";

export function selectMovieAction(movie) {
  console.log(movie, "ini movie dari action");
  return {
    type: SELECT_MOVIE,
    payload: movie,
  };
}
