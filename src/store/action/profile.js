import axios from "axios";
import {signinapi, signupapi} from "../../utility/profile";
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./actionType";

// LOGIN
const loginStart = () => {
  return {type: LOGIN_START};
};

const loginFail = (err) => {
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

export const login = (email, password) => {
  console.log(email, password);
  // dispatch(loginStart());
  // try {
  // const res =
  return axios.post(
    signinapi,
    {email, password},
    {
      headrs: {
        "Content-Type": "application/json",
      },
    }
  );

  //   if (res.data.success) {
  //     return dispatch(loginSuccess(res.data));
  //   } else {
  //     return dispatch(loginFail(res.data.message));
  //   }
  // } catch (err) {
  //   dispatch(loginFail(err.toString()));
  // }
};

//SIGNUP
const signupStart = () => {
  return {
    type: SIGNUP_START,
  };
};

const signupFail = (err) => {
  return {
    type: SIGNUP_FAIL,
    payload: err,
  };
};

const signupSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};

export const signup =
  (firstname, lastname, email, password, phone) => async (dispatch) => {
    dispatch(signupStart);
    try {
      const res = await axios.post(
        signupapi,
        {firstname, lastname, email, password, phone},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        return dispatch(signupSuccess(res.data));
      } else {
        return dispatch(signupFail(res.data.message));
      }
    } catch (err) {
      dispatch(signupFail(err.toString()));
    }
  };
