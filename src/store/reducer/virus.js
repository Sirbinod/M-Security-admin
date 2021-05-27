import {
  VIRUS_FETCH_START,
  VIRUS_FETCH_SUCCESS,
  VIRUS_FETCH_FAIL,
} from "../action/actionType";

const initState = {
  loading: false,
  success: false,
  virus: [],
  error: null,
};

const virus = (state = initState, action) => {
  switch (action.type) {
    case VIRUS_FETCH_START:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case VIRUS_FETCH_SUCCESS:
      return {
        ...state,
        virus: action.payload,
        loading: false,
        success: true,
      };
    case VIRUS_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};
export default virus;
