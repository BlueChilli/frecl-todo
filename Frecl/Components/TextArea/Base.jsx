import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import { InputSetUpMixin } from "../Form/Mixins/InputSetUp";

export default React.createClass({
  mixins: [InputSetUpMixin],
  handleChange() {
    this.onInputChanged(ReactDOM.findDOMNode(this.refs[this.props.name]).value);
  },
  render() {
    var attributes = this.getInputAttributes();
    return <textarea onBlur={this.handleBlur} onChange={this.handleChange} {...attributes} />
  }
});