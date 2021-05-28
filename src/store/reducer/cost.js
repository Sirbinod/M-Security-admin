import {platform} from "chart.js";
import {
  COST_CREATE_FAIL,
  COST_CREATE_SUCCESS,
  COST_CREATE_START,
  COST_FETCH_START,
  COST_FETCH_SUCCESS,
  COST_FETCH_FAIL,
  COST_UPDATE_START,
  COST_UPDATE_SUCCESS,
  COST_UPDATE_FAIL,
  COST_DELETE_START,
  COST_DELETE_SUCCESS,
  COST_DELETE_FAIL,
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
        success: false,
      };
    case COST_CREATE_SUCCESS:
      const newCosts = state.platform;
      const newCost = action.payload.platform;
      newCosts.push(newCost);
      return {
        ...state,
        platform: newCosts,
        success: true,
        loading: false,
      };
    case COST_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
        success: false,
        loading: false,
      };
    case COST_FETCH_START:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case COST_FETCH_SUCCESS:
      return {
        ...state,
        platform: action.payload,
        success: true,
        loading: false,
      };
    case COST_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        success: false,
      };
    case COST_UPDATE_START:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case COST_UPDATE_SUCCESS:
      return platform.map((plt) => {
        if (plt.id === action.payload.id) {
          return {
            ...state,
            plt: action.payload,
            success: true,
            loading: false,
          };
        } else {
          return plt;
        }
      });

    case COST_UPDATE_FAIL:
      return {
        ...state,
        error: action.payload,
        success: false,
      };
    case COST_DELETE_START:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case COST_DELETE_SUCCESS:
      const newPlatform = state.platform.filter(
        ({id}) => id !== action.payload.id
      );
      return {
        ...state,
        loading: false,
      };
    case COST_DELETE_FAIL:
      return {
        ...state,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
export default cost;
