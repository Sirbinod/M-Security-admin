import {
  PARTNER_CREATE_START,
  PARTNER_CREATE_FAIL,
  PARTNER_CREATE_SUCCESS,
} from "../action/actionType";

let partner = JSON.parse(localStorage.getItem("partner"));

const initState = {
  loading: false,
  success: false,
  //   partner: partner,
  error: null,
};

const partner = (state = initState, action) => {
  switch (action.type) {
    case PARTNER_CREATE_START:
      return {
        ...state,
        loading: true,
      };
    case PARTNER_CREATE_SUCCESS:
      return {
        ...state,
        partner: action.partner,
        success: true,
      };

    case PARTNER_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default partner;
