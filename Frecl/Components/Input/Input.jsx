import React, {PropTypes} from "react";
import ReactDOM from "react-dom";

import InputGroup from "../Form/InputGroup.jsx";
import InputWrapper from "../Form/InputWrapper.jsx";
import InputBase from "./Base.jsx";
import DisplayValidation from "../Validation/DisplayValidation.jsx";

export default React.createClass({
  render() {
    const {className, label, labelPostfix, prepend, append, ...props} = this.props;
    return (
      <InputWrapper className={className} name={props.name} labelPostfix={labelPostfix} label={label}>
        <InputGroup prepend={prepend} append={append}>
          <InputBase {...props} />
        </InputGroup>
        <DisplayValidation {...props} />
      </InputWrapper>
    );
  }
});
