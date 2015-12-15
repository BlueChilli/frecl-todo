import React, {PropTypes} from "react";
import ReactDOM from 'react-dom';
import classnames from "classnames";
import SwitchBase from "./Base.jsx";
import DisplayValidation from "../Validation/DisplayValidation.jsx";

import "./Switch.scss";

export default React.createClass({
  render() {
    var {className, label, ...props} = this.props;
    var classes = classnames("switch", className);
    return (
      <div className={classes}>
        <SwitchBase {...props}/>
        <label htmlFor={props.id}>
          <span className="box"/>
          {label}
        </label>
        <DisplayValidation {...props} />
      </div>

    );
  }
});
