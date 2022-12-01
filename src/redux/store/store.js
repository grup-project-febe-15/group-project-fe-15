import { applyMiddleware, combineReducers, createStore } from "redux";
import Reducer from "../reducers/UserReducers";
import thunk from "redux-thunk";
const Reducercampuran = combineReducers({
  user: Reducer,
});

const store = createStore(Reducercampuran, applyMiddleware(thunk));
export default store;
