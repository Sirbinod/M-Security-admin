import {combineReducers} from "redux";
import profilereducer from "./profile";
import partnerreducer from "./partner";
import costreducer from "./cost";
const rootreducer = combineReducers({
  profile: profilereducer,
  partner: partnerreducer,
  cost: costreducer,
});

export default rootreducer;
