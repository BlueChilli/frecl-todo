import React, {PropTypes} from "react";
import ReactDOM from 'react-dom';
import { InputSetUpMixin } from "../Form/Mixins/InputSetUp";

export default React.createClass({
  mixins: [InputSetUpMixin],
  propTypes: {
    id: PropTypes.string.isRequired
  },
  getChecked(){
    if (this.props.type === 'radio') {
      return ReactDOM.findDOMNode(this.refs[this.props.name]).id;
    } else {
      return ReactDOM.findDOMNode(this.refs[this.props.name]).checked;
    }
  },
  handleChange(e) {
    this.onInputChanged(this.getChecked());
  },
  render() {
    var attributes = this.getInputAttributes();
    return <input onBlur={this.handleBlur} onChange={this.handleChange} {...attributes}/>;
  }
});