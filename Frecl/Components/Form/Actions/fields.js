// Constants
export const SET_INPUT = "SET_INPUT";
export const SET_INPUT_MAP = "SET_INPUT_MAP";
export const SET_INPUT_INTERACTION = "SET_INPUT_INTERACTION";
export const SET_ALL_INPUT_INTERACTIONS = "SET_ALL_INPUT_INTERACTIONS";

// Dependenies
import {validateSingleInput} from './validations';

// todo: setInput == setWidget [wrong] .. setValueofWidget?
export function setInput(nameSpace, inputName, value) {
    return {
        type: SET_INPUT,
        nameSpace,
        inputName,
        value
    };
}

export function setInputMap(nameSpace, inputName, inputID, value) {
    return {
        type: SET_INPUT_MAP,
        nameSpace,
        inputName,
        inputID,
        value
    };
}


export function setInputInteraction(nameSpace, inputName, interaction, value) {
    return {
        type: SET_INPUT_INTERACTION,
        nameSpace,
        inputName,
        interaction,
        value
    };
}

export function setAllInputInteractions(nameSpace, interaction, value) {
    return {
        type: SET_ALL_INPUT_INTERACTIONS,
        nameSpace,
        interaction,
        value
    };
}

export function multipleValueInputChanged(nameSpace, inputName, inputID, value, changed){
    return function (dispatch) {
        dispatch(setInputMap(nameSpace, inputName, inputID, value));
        dispatch(setInputInteraction(nameSpace, inputName, 'changed', changed));
        dispatch(validateSingleInput(nameSpace, inputName));
    }
}

export function singleValueInputChanged(nameSpace, inputName, value, changed) {
    return function (dispatch) {
        dispatch(setInput(nameSpace, inputName, value));
        dispatch(setInputInteraction(nameSpace, inputName, 'changed', changed));
        dispatch(validateSingleInput(nameSpace, inputName));
    }
}



