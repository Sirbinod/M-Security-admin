import {
  LICENSES_CREATE_START,
  LICENSES_CREATE_SUCCESS,
  LICENSES_CREATE_FAIL,
  LICENSES_FETCH_START,
  LICENSES_FETCH_SUCCESS,
  LICENSES_FETCH_FAIL,
} from "../action/actionType";

const initState = {
  data: [],
  loading: false,
  success: false,
  error: null,
};
const licenses = (state = initState, action) => {
  switch (action.type) {
    case LICENSES_CREATE_START:
      return {
        ...state,
        loading: true,
      };
    case LICENSES_CREATE_SUCCESS:
      const newLicenses = state.data;
      const newLicens = action.payload.data;
      newLicenses.push(newLicens);
      return {
        ...state,
        data: newLicenses,
        success: true,
      };
    case LICENSES_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LICENSES_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case LICENSES_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        success: true,
      };
    case LICENSES_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default licenses;
