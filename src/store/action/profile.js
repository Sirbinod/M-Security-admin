import axios from "axios";
import {signinapi} from "../../utility/profile";
import {LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT} from "./actionType";

// LOGIN
export const loginStart = () => {
  return {type: LOGIN_START};
};

export const loginFail = (err) => {
  return {
    type: LOGIN_FAIL,
    payload: err,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const logOut = () => {
  return {
    type: LOGOUT,
  };
};

export const login = (email, password) => {
  return axios.post(
    signinapi,
    {email, password},
    {
      headrs: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const logout = () => (dispatch) => {
  dispatch(logOut());
};
