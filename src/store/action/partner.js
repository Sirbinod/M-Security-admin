import axios from "axios";
import {partnerapi, partnercreateapi} from "../../utility/profile";
import {
  PARTNER_CREATE_START,
  PARTNER_CREATE_SUCCESS,
  PARTNER_CREATE_FAIL,
  PARTNER_FETCH_START,
  PARTNER_FETCH_SUCCESS,
  PARTNER_FETCH_FAIL,
} from "./actionType";

const partnerCreateStart = () => {
  return {type: PARTNER_CREATE_START};
};

const partnerCreateSuccess = (data) => {
  return {
    type: PARTNER_CREATE_SUCCESS,
    payload: data,
  };
};

const partnerCreateFail = (err) => {
  return {
    type: PARTNER_CREATE_FAIL,
    payload: err,
  };
};

export const partnerCreate =
  (name, email, location, phone, password) => async (dispatch) => {
    dispatch(partnerCreateStart());
    try {
      const res = await axios.post(
        partnercreateapi,
        {name, email, location, phone, password},
        {
          headrs: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        return dispatch(partnerCreateSuccess(res.data));
      } else {
        return dispatch(partnerCreateFail(res.data.message));
      }
    } catch (err) {
      dispatch(partnerCreateFail(err.toString()));
    }
  };

const partnerFetchStart = () => {
  return {
    type: PARTNER_FETCH_START,
  };
};
const partnerFetchSuccess = (data) => {
  return {
    type: PARTNER_FETCH_SUCCESS,
    payload: data,
  };
};

const partnerFetchFail = (err) => {
  return {
    type: PARTNER_FETCH_FAIL,
    payload: err,
  };
};

export const partnerFetch = () => async (dispatch) => {
  dispatch(partnerFetchStart());
  try {
    const res = await axios.get(partnerapi);
    dispatch(partnerFetchSuccess(res.data));
  } catch (err) {
    dispatch(partnerFetchFail(err));
  }
};