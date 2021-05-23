import {actions} from "react-table";
import {
  VIRUS_FETCH_START,
  VIRUS_FETCH_SUCCESS,
  VIRUS_FETCH_FAIL,
} from "../action/actionType";

const initState = {
  virus: [],
};

const virus = (state = initState, action) => {
  switch (action.type) {
    case VIRUS_FETCH_START:
      return {
        ...state,
      };
    case VIRUS_FETCH_SUCCESS:
      return {
        ...state,
        virus: action.payload,
      };
    case VIRUS_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default virus;
