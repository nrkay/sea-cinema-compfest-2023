import { createStore, combineReducers, applyMiddleware } from "redux";
import movieReducer from "../Reducer/MovieReducer";
import thunk from "redux-thunk";
import selectMovieReducer from "../Reducer/selectMovieReucer";
import seatMovie from "../Reducer/seatMovie";

const allReducer = combineReducers({
  movie: movieReducer,
  selectMovie: selectMovieReducer,
  seatMovie: seatMovie,
});

const Store = createStore(allReducer, applyMiddleware(thunk));
export default Store;
