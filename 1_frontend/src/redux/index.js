import { combineReducers } from "redux";

import { userSignupReducer, getUsersReducer } from "./reducers/userReducers.js";

export const reducer = combineReducers({
  signup: userSignupReducer,
  getall: getUsersReducer,
});
