import { FETCH_DATA } from "../Action/seatMovieAction";
const initialState = {
  seat: [],
};

const seatMovie = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        seat: action.payload,
      };
    default:
      return state;
  }
};

export default seatMovie;
