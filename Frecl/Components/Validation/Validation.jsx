import React, {PropTypes} from "react";
import classnames from "classnames";
import {setupValidation, removeSingleValidation} from "../Form/Actions/validations";

import "./Validation.scss";

export default React.createClass({
  contextTypes: {
    nameSpace: React.PropTypes.string,
    dispatch: PropTypes.func
  },
  componentWillMount() {
    this.context.dispatch(setupValidation(this.context.nameSpace, this.props.name, this.props.valType, this.props.test));
  },
  componentWillUpdate(nextProps){
    if (Number.isNaN(this.props.test) || Number.isNaN(nextProps.test)) {
      throw new Error("Test must not be NaN");
    }
    if (this.props.valType !== nextProps.valType || this.props.test !== nextProps.test) {
      this.context.dispatch(setupValidation(this.context.nameSpace, this.props.name, nextProps.valType, nextProps.test));
    }
  },
  componentWillUnmount(){
    this.context.dispatch(removeSingleValidation(this.context.nameSpace, this.props.name));
  },
  render() {
    var classes = classnames('validation', {
      'invalid': !(!this.props.changed || this.props.valid)
    });
    return <div className={classes}>{this.props.children}</div>;
  }
});
