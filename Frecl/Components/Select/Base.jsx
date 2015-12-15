import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import { InputSetUpMixin } from "../Form/Mixins/InputSetUp";

export default React.createClass({
  mixins: [InputSetUpMixin],
  getDefaultProps(){
    return {
      type: 'select'
    }
  },
  handleChange() {
    var newValue = ReactDOM.findDOMNode(this.refs[this.props.name]).value;
    this.onInputChanged(newValue);
  },
  render: function () {
    var attributes = this.getInputAttributes();
    return (
      <select onBlur={this.handleBlur} onChange={this.handleChange} {...attributes}>
        {this.props.children.map((option) => {
          return option;
          })}
      </select>
    );
  }
});
