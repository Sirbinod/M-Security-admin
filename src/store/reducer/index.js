import {combineReducers} from "redux";
import profilereducer from "./profile";
import partnerreducer from "./partner";
import costreducer from "./cost";
import licensesreducer from "./licenses";
import virusreducer from "./virus";
const rootreducer = combineReducers({
  profile: profilereducer,
  partner: partnerreducer,
  cost: costreducer,
  licenses: licensesreducer,
  virus: virusreducer,
});

export default rootreducer;
