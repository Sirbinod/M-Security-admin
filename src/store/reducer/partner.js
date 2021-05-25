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
  loading: false,
  success: false,
  partners: [],
  error: null,
};

const Partner = (state = initState, action) => {
  switch (action.type) {
    case PARTNER_CREATE_START:
      return {
        ...state,
        loading: true,
      };
    case PARTNER_CREATE_SUCCESS:
      const newPartners = state.partners;
      const newPartner = action.payload.data;
      newPartners.push(newPartner);
      return {
        ...state,
        partners: newPartners,
        success: true,
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
        success: true,
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
