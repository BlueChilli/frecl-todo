import React, {PropTypes} from "react";
import Numeral from "numeral";
import { Provider, connect } from "react-redux";

import { singleValueInputChanged, multipleValueInputChanged, setInputInteraction } from "../Actions/fields";

function isMultipleValueInput(props = this.props) {
  return props.name.search(/\[\]/) !== -1;
}

export var InputSetUpMixin = {
  propTypes: {
    name: PropTypes.string.isRequired,
    id: (props, propName, componentName) => {
      if (isMultipleValueInput(props) && props[propName] === undefined) {
        return new Error(componentName + " components with multiple values (name[]) enabled must have an accompanying ID");
      }
    },
    mask: (props, propName, componentName) => {
      if(props[propName] && props.type !== 'text'){
        return new Error("Inputs with the mask property must be type=\"text\" check " + componentName);
      }
    }
  },

  contextTypes: {
    nameSpace: PropTypes.string,
    FormState: PropTypes.object,
    dispatch: PropTypes.func
  },

  getStateValue(){
    if (this.isMultipleValueInput()) {
      return this.context.FormState.getIn(['fields', this.context.nameSpace, this.props.name, 'value', this.props.id]);
    } else {
      return this.context.FormState.getIn(['fields', this.context.nameSpace, this.props.name, 'value']);
    }
  },

  getInputValue(){
    const stateValue = this.getStateValue();
    if (this.props.type === 'radio' || this.props.type === 'checkbox') {
      if (this.isMultipleValueInput()) {
        return (stateValue !== undefined) ? stateValue : this.props.defaultChecked ? true : this.props.defaultSelected ? true : false;
      }
      return stateValue ? stateValue : this.props.defaultChecked ? true : this.props.defaultSelected ? true : false;
    } else {
      return (stateValue !== undefined) ? stateValue : (this.props.defaultValue) ? this.props.defaultValue : (this.props.value) ? this.props.value : '';
    }
  },

  onInputChanged(value, changed = true) {
    if (this.isMultipleValueInput()) {
      this.context.dispatch(multipleValueInputChanged(this.context.nameSpace, this.props.name, this.props.id, value, changed));
    } else {
      this.context.dispatch(singleValueInputChanged(this.context.nameSpace, this.props.name, value, changed));
    }
  },

  componentWillMount() {
    this.onInputChanged(this.getInputValue(), false);
  },

  handleBlur() {
    this.context.dispatch(setInputInteraction(this.context.nameSpace, this.props.name, 'blurred', true));
  },

  getMaskedValue(value){
    if (this.props.mask) {
      const maskedValue = Numeral(value).format(this.props.mask);
      return value === '0' || maskedValue !== '0' ? maskedValue : '';
    }
    return value;
  },

  getUnMasked(value){
    if (this.props.mask) {
      return Numeral().unformat(value);
    }
    return value;
  },

  getInputAttributes(){
    const {children, className, ...safeProps} = this.props;
    const stateValue = this.getStateValue();
    const reactProps = Object.assign({}, safeProps, {
      ref: this.props.name
    });
    if (this.props.type === 'checkbox' || this.props.type === 'radio') {
      if (this.props.type === 'radio') {
        return Object.assign({}, reactProps, {
          checked: this.props.id === stateValue
        });
      } else {
        return Object.assign({}, reactProps, {
          checked: stateValue
        });
      }
    } else {
      return Object.assign({}, reactProps, {
        value: this.getMaskedValue(stateValue)
      });
    }
  },

  isMultipleValueInput: isMultipleValueInput
};
