import {Map} from "immutable";
import {createReducer} from "redux-immutablejs"

import { ADD_VALIDATION, SET_VALIDATION, REMOVE_SINGLE_VALIDATION, REMOVE_ALL_FORM_VALIDATION } from "../Actions/validations.js";

export default createReducer(Map(), {

    ADD_VALIDATION: (state, action) => {
        return state.mergeIn([action.nameSpace, action.inputName, 'tests'], Map({
            [action.typeOfTest]: Map({
                test: action.test,
                valid: false
            })
        }));
    },

    SET_VALIDATION: (state, action) => {
        return state.setIn([action.nameSpace, action.inputName, 'tests', action.typeOfTest, 'valid'], action.result);
    },

    REMOVE_SINGLE_VALIDATION: (state, action) => {
        return state.deleteIn([action.nameSpace, action.inputName]);
    },

    REMOVE_ALL_FORM_VALIDATION: (state, action) => {
        return state.delete(action.nameSpace);
    }
});


