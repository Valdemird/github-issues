import { ACTION } from "../types/index";

const initState = {
  autoComplete:[],
  issues: [],
};

const reducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION.SET_AUTOCOMPLETE:
      return { ...state, autoComplete: action.payload };
    case ACTION.SET_ISSUES:
      return {
        ...state,
        issues:action.payload
      };
    default:
      return state;
  }
};

export default reducer;
