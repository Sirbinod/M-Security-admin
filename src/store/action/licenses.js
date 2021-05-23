import axios from "axios";
import {
  LICENSES_CREATE_START,
  LICENSES_CREATE_SUCCESS,
  LICENSES_CREATE_FAIL,
  LICENSES_FETCH_START,
  LICENSES_FETCH_SUCCESS,
  LICENSES_FETCH_FAIL,
} from "./actionType";
import {licensesapi, licensescreateapi} from "../../utility/profile";

const licensesCreateStart = () => {
  return {
    type: LICENSES_CREATE_START,
  };
};

const licensesCreateSuccess = (data) => {
  return {
    type: LICENSES_CREATE_SUCCESS,
    payload: data,
  };
};

const licensesCreateFail = (err) => {
  return {
    type: LICENSES_CREATE_FAIL,
    payload: err,
  };
};

export const licensesCreate =
  (number, platformId, token) => async (dispatch) => {
    dispatch(licensesCreateStart());
    try {
      const res = await axios.post(
        licensescreateapi,
        {number, platformId},
        {
          headrs: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        return dispatch(licensesCreateSuccess(res.data));
      } else {
        return dispatch(licensesCreateFail(res.data.message));
      }
    } catch (err) {
      dispatch(licensesCreateFail(err.toString()));
    }
  };

const licensesFetchStart = () => {
  return {
    type: LICENSES_FETCH_START,
  };
};

const licensesFetchSuccess = (data) => {
  return {
    type: LICENSES_FETCH_SUCCESS,
    payload: data,
  };
};

const licensesFetchFail = (err) => {
  return {
    type: LICENSES_FETCH_FAIL,
    payload: err,
  };
};

export const licensesFetch = (token) => async (dispatch) => {
  dispatch(licensesFetchStart());
  try {
    const res = await axios.get(licensesapi, {
      headrs: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.success) {
      return dispatch(licensesFetchSuccess(res.data.data));
    } else {
      return dispatch(licensesFetchFail(res.data.message));
    }
  } catch (err) {
    dispatch(licensesFetchFail(err.toString()));
  }
};
