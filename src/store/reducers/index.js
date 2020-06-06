import { combineReducers } from "redux";
import issueReducer from "./issueReducer";

const reducer = combineReducers({
  issueReducer,
});

export default reducer;
