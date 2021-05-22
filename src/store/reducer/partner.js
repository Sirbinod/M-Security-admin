import {
  PARTNER_CREATE_START,
  PARTNER_CREATE_FAIL,
  PARTNER_CREATE_SUCCESS,
  PARTNER_FETCH_START,
  PARTNER_FETCH_FAIL,
  PARTNER_FETCH_SUCCESS,
} from "../action/actionType";

// let partner = JSON.parse(localStorage.getItem("partners"));

const initState = {
  partners: [],
};

const Partner = (state = initState, action) => {
  switch (action.type) {
    case PARTNER_CREATE_START:
      return {
        ...state,
      };
    case PARTNER_CREATE_SUCCESS:
      return {
        ...state,
        partners: action.payload,
      };

    case PARTNER_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case PARTNER_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case PARTNER_FETCH_SUCCESS:
      return {
        ...state,
        partners: action.payload,
      };

    case PARTNER_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default Partner;
