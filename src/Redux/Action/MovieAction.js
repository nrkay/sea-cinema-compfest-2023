import axios from "axios";

export const GET_MOVIE = "GET_MOVIE";
export const FETCH_START = "FETCH_START";
export const SUCCCESS_FETCH_MOVIE = "SUCCCESS_FETCH_MOVIE";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function fetchMovie(data) {
  return {
    type: SUCCCESS_FETCH_MOVIE,
    payload: data,
  };
}

export const getMovie = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const response = await axios.get(
      "https://seleksi-sea-2023.vercel.app/api/movies"
    );
    dispatch(fetchMovie(response.data));
  };
};
