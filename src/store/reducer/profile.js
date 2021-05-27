import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../action/actionType";

let user = JSON.parse(localStorage.getItem("user"));

const initState = {
  isLoggedIn: user ? true : false,
  loading: false,
  success: false,
  user: user,
  error: null,
};

const profile = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      console.log(action.user);
      const user = action.payload.user;
      user.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        isLoggedIn: true,
        user: user,
        success: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};
export default profile;
