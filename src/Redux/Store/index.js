import { createStore, combineReducers, applyMiddleware } from "redux";
import movieReducer from "../Reducer/MovieReducer";
import thunk from "redux-thunk";

const allReducer = combineReducers({
  movie: movieReducer,
});

const Store = createStore(allReducer, applyMiddleware(thunk));
export default Store;
