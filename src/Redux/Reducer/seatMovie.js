import { FETCH_DATA, UPDATE_SEAT_BOOKED } from "../Action/seatMovieAction";
const initialState = {
  seat: [],
  seatUpdate: [],
};

const seatMovie = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        seat: action.payload,
      };
    case UPDATE_SEAT_BOOKED:
      return {
        ...state,
        seatUpdate: action.payload,
      };
    default:
      return state;
  }
};

export default seatMovie;
