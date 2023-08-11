import { createStore, combineReducers, applyMiddleware } from "redux";
import movieReducer from "../Reducer/MovieReducer";
import thunk from "redux-thunk";
import seatMovie from "../Reducer/seatMovie";
import balanceReducer from "../Reducer/Balance";

const allReducer = combineReducers({
  balance: balanceReducer,
  movie: movieReducer,
  seatMovie: seatMovie,
});

const Store = createStore(allReducer, applyMiddleware(thunk));
export default Store;
