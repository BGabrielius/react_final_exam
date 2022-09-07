import { combineReducers } from "redux";

import {
  userSignupReducer,
  getUsersReducer,
  updateUserReducer,
  deleteUserReducer,
} from "./reducers/userReducers.js";

export const reducer = combineReducers({
  signup: userSignupReducer,
  getall: getUsersReducer,
  update: updateUserReducer,
  delete: deleteUserReducer,
});
