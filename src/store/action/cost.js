import axios from "axios";

import {
  costapi,
  costcreateapi,
  costdeleteapi,
  costupdateapi,
} from "../../utility/profile";
import {
  COST_CREATE_START,
  COST_CREATE_SUCCESS,
  COST_CREATE_FAIL,
  COST_FETCH_START,
  COST_FETCH_SUCCESS,
  COST_FETCH_FAIL,
  COST_UPDATE_START,
  COST_UPDATE_SUCCESS,
  COST_UPDATE_FAIL,
  COST_DELETE_START,
  COST_DELETE_SUCCESS,
  COST_DELETE_FAIL,
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

const costUpdateStart = () => {
  return {
    type: COST_UPDATE_START,
  };
};

const costUpdateSuccess = (data) => {
  return {
    type: COST_UPDATE_SUCCESS,
    payload: data,
  };
};

const costUpdateFail = (err) => {
  return {
    type: COST_UPDATE_FAIL,
    payload: err,
  };
};

export const costUpdate = (id, data) => async (dispatch) => {
  dispatch(costUpdateStart());
  try {
    const res = await axios.put(
      costupdateapi,
      {id, data},
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data.success) {
      dispatch(costUpdateSuccess(res.data));
    } else {
      dispatch(costUpdateFail(res.data.message));
    }
  } catch (error) {
    dispatch(costUpdateFail(error.response.data.error));
  }
};

const costDeleteStart = () => {
  return {
    type: COST_DELETE_START,
  };
};

const costDeleteSuccess = (id) => {
  return {
    type: COST_DELETE_SUCCESS,
    payload: id,
  };
};

const costDeleteFail = (err) => {
  return {
    type: COST_DELETE_FAIL,
    payload: err,
  };
};

export const costDelete = (id, token) => async (dispatch) => {
  dispatch(costDeleteStart());
  console.log(`whst is: ${id}`, `toke:  ${token}`);
  try {
    const res = await axios.delete(costdeleteapi + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(costDeleteSuccess(id));
  } catch (error) {
    dispatch(costDeleteFail(error));
  }
};
