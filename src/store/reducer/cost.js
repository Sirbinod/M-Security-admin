import {
  COST_CREATE_FAIL,
  COST_CREATE_SUCCESS,
  COST_CREATE_START,
  COST_FETCH_START,
  COST_FETCH_SUCCESS,
  COST_FETCH_FAIL,
} from "../action/actionType";

const initState = {
  loading: false,
  success: false,
  platform: [],
  error: null,
};

const cost = (state = initState, action) => {
  switch (action.type) {
    case COST_CREATE_START:
      return {
        ...state,
        loading: true,
      };
    case COST_CREATE_SUCCESS:
      const newCosts = state.platform;
      const newCost = action.payload.platform;
      newCosts.push(newCost);
      return {
        ...state,
        platform: newCosts,
        success: true,
      };
    case COST_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case COST_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case COST_FETCH_SUCCESS:
      return {
        ...state,
        platform: action.payload,
        success: true,
      };
    case COST_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default cost;
