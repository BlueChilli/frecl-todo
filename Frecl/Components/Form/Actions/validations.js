export const ADD_VALIDATION = "ADD_VALIDATION";
export const SET_VALIDATION = "SET_VALIDATION";
export const REMOVE_SINGLE_VALIDATION = "REMOVE_SINGLE_VALIDATION";
export const REMOVE_ALL_FORM_VALIDATION = "REMOVE_ALL_FORM_VALIDATION";

import regExpList from "../Helpers/regExp";
import {debounce} from "lodash";
import {testValidation} from "../../../Helpers/validate"


export function addValidation(nameSpace, inputName, typeOfTest, test) {
  return {
    type: ADD_VALIDATION,
    nameSpace,
    inputName,
    typeOfTest,
    test
  };
}


export function setValidation(nameSpace, inputName, typeOfTest, result) {
  return {
    type: SET_VALIDATION,
    nameSpace,
    inputName,
    typeOfTest,
    result
  };
}

export function removeSingleValidation(nameSpace, inputName) {
  return {
    type: REMOVE_SINGLE_VALIDATION,
    nameSpace,
    inputName
  }
}

export function removeAllFormValidation(nameSpace) {
  return {
    type: REMOVE_ALL_FORM_VALIDATION,
    nameSpace
  }
}

function processValidation(value, test, typeOfTest, nameSpace, inputName) {
  return function (dispatch) {
    const dispatchVal = function () {
      return result => dispatch(setValidation(nameSpace, inputName, typeOfTest, result));
    }();

    if (typeOfTest !== 'customValidation') {
      dispatchVal(testValidation(value, test, typeOfTest));
    } else {
      if (typeof test === "function") {
        const customValidation = test(value);
        if (customValidation instanceof Promise) {
          customValidation
            .then(value => dispatchVal(value))
            .catch(error => {
              dispatchVal(false);
            });
        } else if (typeof customValidation === "boolean") {
          return dispatchVal(customValidation);
        } else if (typeof customValidation === "undefined") {
          return false;
        } else {
          return console.error("Custom validation must return either a bool or a promise");
        }
      }
      return false;
    }
  }
}


export function validateSingleInput(nameSpace, inputName) {
  return function (dispatch, getState) {
    var formState = getState().get('FormState');
    if (formState.hasIn(['validations', nameSpace, inputName])) {
      var validation = formState.getIn(['validations', nameSpace, inputName, 'tests']);
      var value = formState.getIn(['fields', nameSpace, inputName, 'value']);
      validation.forEach((testObj, typeOfTest) => {
        dispatch(processValidation(value, testObj.get('test'), typeOfTest, nameSpace, inputName));
      });
    }
  }

}

export function setupValidation(nameSpace, inputName, typeOfTest, test) {
  return function (dispatch) {
    dispatch(addValidation(nameSpace, inputName, typeOfTest, test));
    dispatch(validateSingleInput(nameSpace, inputName));
  }
}
