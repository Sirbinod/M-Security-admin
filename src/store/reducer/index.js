import {combineReducers} from "redux";
import profilereducer from "./profile";
import partnerreducer from "./partner";
import costreducer from "./cost";
import licensesreducer from "./licenses";
import virusreducer from "./virus";
import {reducer as formReducer} from "redux-form";
const rootreducer = combineReducers({
  profile: profilereducer,
  partner: partnerreducer,
  cost: costreducer,
  licenses: licensesreducer,
  virus: virusreducer,
  form: formReducer,
});

export default rootreducer;
