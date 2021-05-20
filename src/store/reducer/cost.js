import {
  COST_CREATE_FAIL,
  COST_CREATE_SUCCESS,
  COST_CREATE_START,
  COST_FETCH_START,
  COST_FETCH_SUCCESS,
  COST_FETCH_FAIL,
} from "../action/actionType";

const initState = {};

const cost = (state = initState, action) => {
  switch (action.type) {
    case COST_CREATE_START:
      return {
        ...state,
      };
    case COST_CREATE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case COST_CREATE_FAIL:
      return {
        ...state,
        payload: action.payload,
      };
    case COST_FETCH_START:
      return {
        ...state,
      };
    case COST_FETCH_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case COST_FETCH_FAIL:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};
export default cost;
