import {combineReducers} from "redux";
import profilereducer from "./profile";
import partnerreducer from "./partner";
const rootreducer = combineReducers({
  profile: profilereducer,
  partner: partnerreducer,
});

export default rootreducer;
