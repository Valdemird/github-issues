import { combineEpics } from "redux-observable";
import { userEpic } from "./search";

export default combineEpics(userEpic);
