import axios from "axios";
import {virusapi} from "../../utility/profile";
import {
  VIRUS_FETCH_START,
  VIRUS_FETCH_SUCCESS,
  VIRUS_FETCH_FAIL,
} from "./actionType";

const virusFetchStart = () => {
  return {
    type: VIRUS_FETCH_START,
  };
};

const virusFetchSuccess = (data) => {
  return {
    type: VIRUS_FETCH_SUCCESS,
    payload: data,
  };
};

const virusFetchFail = (err) => {
  return {
    type: VIRUS_FETCH_FAIL,
    payload: err,
  };
};

export const virusFetch = (token) => async (dispatch) => {
  dispatch(virusFetchStart());
  try {
    const res = await axios.get(virusapi, {
      headrs: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(virusFetchSuccess(res.data.virus));
  } catch (err) {
    dispatch(virusFetchFail(err));
  }
};
