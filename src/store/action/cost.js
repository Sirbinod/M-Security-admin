import axios from "axios";

import {costapi, costcreateapi} from "../../utility/profile";
import {
  COST_CREATE_START,
  COST_CREATE_SUCCESS,
  COST_CREATE_FAIL,
  COST_FETCH_START,
  COST_FETCH_SUCCESS,
  COST_FETCH_FAIL,
} from "./actionType";

const costCreateStart = () => {
  return {type: COST_CREATE_START};
};

const costCreateSuccess = (data) => {
  return {
    type: COST_CREATE_SUCCESS,
    payload: data,
  };
};

const costCreateFail = (err) => {
  return {
    type: COST_CREATE_FAIL,
    payload: err,
  };
};

export const costCreate =
  (platform, price, title, token) => async (dispatch) => {
    dispatch(costCreateStart());
    console.log("token", token);
    try {
      const res = await axios.post(
        costcreateapi,
        {platform, price, title},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.success) {
        return dispatch(costCreateSuccess(res.data));
      } else {
        return dispatch(costCreateFail(res.data.message));
      }
    } catch (err) {
      dispatch(costCreateFail(err.response.data.error));
    }
  };

const costFetchStart = () => {
  return {
    type: COST_FETCH_START,
  };
};

const costFetchSuccess = (data) => {
  return {
    type: COST_FETCH_SUCCESS,
    payload: data,
  };
};

const costFetchFail = (err) => {
  return {
    type: COST_FETCH_FAIL,
    payload: err,
  };
};

export const costFetch = (token) => async (dispatch) => {
  dispatch(costFetchStart());
  try {
    const res = await axios.get(costapi, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(costFetchSuccess(res.data.platform));
  } catch (err) {
    dispatch(costFetchFail(err.response.data.error));
  }
};
