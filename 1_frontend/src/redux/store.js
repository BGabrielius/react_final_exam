import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./index.js";

export default configureStore({
  reducer,
});
