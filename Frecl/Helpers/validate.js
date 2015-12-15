import Immutable from 'immutable';

var validations = {
  required: (value, test) => {
    const immutVal = Immutable.fromJS(value);
    if (Immutable.Map.isMap(immutVal)) {
      // This is for multiple value arrays
      return value.every(value => {
        return value;
      });
    } else if (typeof value === "boolean") {
      //Checkboxes
      return value;
    }
    return value.toString().length > 0
  },
  pattern: (value, test) => {
    let patternRegExp = new RegExp(test);
    return patternRegExp.test(value);
  },
  type: (value, test) => {
    let typeRegExp = new RegExp(regExpList[test]);
    return typeRegExp.test(value);
  },
  minLength: (value, test) => {
    return value.toString().length >= parseInt(test);
  },
  maxLength: (value, test) => {
    return value.toString().length <= parseInt(test);
  },
  min: (value, test) => {
    return parseInt(value) >= parseInt(test)
  },
  max: (value, test) => {
    return parseInt(value) <= parseInt(test)
  },
  'default': (value, test) => {
    return false;
  }
};

export function testValidation(value, test, typeOfTest) {
  if (value !== undefined && value !== null) {
    if (validations[typeOfTest] !== undefined) {
      return validations[typeOfTest](value, test);
    } else {
      return validations['default']();
    }
  }
  return validations['default']();
}