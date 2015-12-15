import {Map, List} from "immutable";
import {createReducer} from "redux-immutablejs"

import { SET_INPUT, SET_INPUT_MAP, SET_INPUT_INTERACTION, SET_ALL_INPUT_INTERACTIONS } from "../Actions/fields";

function _setInputMap(inputID, inputValue, currentMap) {
  if (inputID) {
    const map = currentMap || Map();
    return map.set(inputID, inputValue || false);
  }
  return null;
}

export default createReducer(Map(), {
  // todo: Change SET_INPUT to SET_INPUT_VALUE
  SET_INPUT: (state, action) => {
    const valuePath = [action.nameSpace, action.inputName, 'value'];
    return state.setIn(valuePath, action.value);
  },

  // todo: SET_INPUT_MAP  (needs the word 'value?')
  SET_INPUT_MAP: (state, action) => {
    const valueMapPath = [action.nameSpace, action.inputName, 'value'];
    const currentInputMap = state.getIn(valueMapPath);
    return state.setIn(valueMapPath, _setInputMap(action.inputID, action.value, currentInputMap));
  },
  SET_INPUT_INTERACTION: (state, action) => {
    return state.setIn([action.nameSpace, action.inputName, action.interaction], action.value);
  },
  SET_ALL_INPUT_INTERACTIONS: (state, action) => {
    var fieldsPath = List([action.nameSpace]);
    var fields = state.getIn(fieldsPath);
    var updatedFields = fields.map((value) => {
      return value.set(action.interaction, action.value);
    });
    return state.setIn(fieldsPath, updatedFields);
  }
});

