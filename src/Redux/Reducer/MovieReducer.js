import { FETCH_START, SUCCCESS_FETCH_MOVIE } from "../Action/MovieAction";
const initialState = {
  movie: [],
  isLoading: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCCESS_FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
