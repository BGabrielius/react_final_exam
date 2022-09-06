import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_GETALL_REQUEST,
  USER_GETALL_SUCCESS,
  USER_GETALL_FAIL,
} from "../constants/userConstants";

import api from "../../shared/api";

export const createUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });

    const data = await api.signup(user);
    console.log(data);

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
    console.log(error.message);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_GETALL_REQUEST });

    const data = await api.getUsers();
    // console.log("123", data);

    dispatch({ type: USER_GETALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_GETALL_FAIL, payload: error.message });
    console.log(error.message);
  }
};
