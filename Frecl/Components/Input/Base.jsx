import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import { InputSetUpMixin } from "../Form/Mixins/InputSetUp";

export default React.createClass({
  mixins: [InputSetUpMixin],
  handleChange() {
    const value = ReactDOM.findDOMNode(this.refs[this.props.name]).value;
    const unMaskedValue = this.getUnMasked(value);
    this.onInputChanged(unMaskedValue);
  },
  render() {
    var attributes = this.getInputAttributes();
    return <input onBlur={this.handleBlur} onChange={this.handleChange} {...attributes} />
  }
});
