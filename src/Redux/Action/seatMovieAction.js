import axios from "axios";

export const MAKE_SEAT_MOVIE = "MAKE_SEAT_MOVIE";
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SEAT_BOOKED = "UPDATE_SEAT_BOOKED";

function fetchMovie(data) {
  return {
    type: FETCH_DATA,
    payload: data,
  };
}

export const editSeatBookedMovie = (data) => {
  return {
    type: UPDATE_SEAT_BOOKED,
    payload: data,
  };
};

export const seatMovieAction = () => {
  return async (dispatch) => {
    console.log("ini action dari seat movie");
    const response = await axios.get(
      "https://seleksi-sea-2023.vercel.app/api/movies"
    );
    const titleMovie = response.data;
    const data = titleMovie.map((element, index) => {
      return {
        id: index,
        name: element.title,
        describe: element.description,
        relase_date: element.release_date,
        poster: element.poster_url,
        age_rating: element.age_rating,
        ticke_price: element.ticket_price,
        seat: Array(64).fill({
          status: true,
        }),
      };
    });
    dispatch(fetchMovie(data));
  };
  // console.log("hello");
};
