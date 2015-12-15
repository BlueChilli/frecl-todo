import React, {PropTypes} from "react";
import ReactDOM from "react-dom";

import InputGroup from "../Form/InputGroup.jsx";
import InputWrapper from "../Form/InputWrapper.jsx";
import TextAreaBase from "./Base.jsx";
import DisplayValidation from "../Validation/DisplayValidation.jsx";

export default React.createClass({
  render() {
    const {className, label, labelPostfix, ...props} = this.props;
    return (
      <InputWrapper className={className} name={this.props.name} labelPostfix={labelPostfix} label={label}>
        <TextAreaBase {...props} />
        <DisplayValidation {...props} />
      </InputWrapper>
    );
  }
});
