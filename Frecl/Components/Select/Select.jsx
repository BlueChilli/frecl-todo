import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import InputWrapper from "../Form/InputWrapper.jsx";
import SelectBase from "./Base.jsx";
import "./Select.scss";

export default React.createClass({
  render: function () {
    const {label, labelPostfix, arrow, ...props} = this.props;
    return (
      <InputWrapper className="select" name={props.name} labelPostfix={labelPostfix} label={label}>
        <div className="styled-select">
          <SelectBase {...props}/>
          <div className="arrow">{arrow}</div>
        </div>
      </InputWrapper>
    );
  }
});
