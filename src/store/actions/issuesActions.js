import { ACTION } from "../types";

export const setAutoComplete = (autoCompleteList) => ({
  type: ACTION.SET_AUTOCOMPLETE,
  payload:autoCompleteList
});

export const setIssues = (issues) => ({
  type: ACTION.SET_ISSUES,
  payload:issues
});

export const typing = (text) => ({
  type: ACTION.TYPING,
  payload:text
});

export const search = (text) => ({
  type: ACTION.SEARCH,
  payload:text
});
