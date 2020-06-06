import { ACTION } from "../types";
import { ofType } from "redux-observable";
import { map,filter,debounceTime, mergeMap} from "rxjs/operators";
import { from } from 'rxjs';
import {setAutoComplete} from '../actions/issuesActions'
import {testing} from '../../services';

export const userEpic = (action$) => {
  return action$.pipe(
    ofType(ACTION.TYPING),
    debounceTime(250),
    filter((action) => action.payload[action.payload.length-1] !== " "),
    mergeMap(action=> from(testing(action.payload))),
    map((value) => setAutoComplete(value))
  );
};
