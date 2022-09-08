import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_GETALL_REQUEST,
  USER_GETALL_SUCCESS,
  USER_GETALL_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from "../constants/userConstants";

import api from "../../shared/api";

export const createUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });

    const data = await api.signup(user);

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
};

export const getAllUsers = (page) => async (dispatch) => {
  try {
    dispatch({ type: USER_GETALL_REQUEST });

    const data = await api.getUsers(page);

    dispatch({ type: USER_GETALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_GETALL_FAIL, payload: error.message });
  }
};

export const updateOneUser = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const data = await api.updateUser(id, user);

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
};

export const deleteOneUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });

    const data = await api.deleteUser(id);

    dispatch({ type: USER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_DELETE_FAIL, payload: error.message });
  }
};
