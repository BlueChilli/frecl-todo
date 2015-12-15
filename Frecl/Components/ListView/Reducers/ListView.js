import {Map, List} from "immutable";
import {createReducer} from "redux-immutablejs"

import { ADD_LIST_ITEM, REMOVE_LIST_ITEM } from "../Actions/ListView";

function getListItemPath(action) {
  const defaultPath = List([action.component, action.id]);
  if (action.index !== undefined) {
    return defaultPath.push(action.index);
  }
  return defaultPath;
}


export default createReducer(Map(), {
  ADD_LIST_ITEM: (state, action) => {
    const listItems = state.getIn(getListItemPath(action), List());
    return state.setIn(getListItemPath(action), listItems.push(action.template));
  },
  REMOVE_LIST_ITEM: (state, action) => {
    return state.deleteIn(getListItemPath(action));
  }
});

