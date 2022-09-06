import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_GETALL_REQUEST,
  USER_GETALL_SUCCESS,
  USER_GETALL_FAIL,
} from "../constants/userConstants";

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GETALL_REQUEST:
      return { loading: true };
    case USER_GETALL_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_GETALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
