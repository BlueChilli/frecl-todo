import React, {PropTypes} from "react";
import {setupValidation, removeSingleValidation} from "../Form/Actions/validations";

export default React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  },
  contextTypes: {
    nameSpace: PropTypes.string,
    FormState: PropTypes.object
  },
  render() {
    if(React.Children.count(this.props.children) === 0){
      return null;
    }
    return (
      <div>
        {React.Children.map(this.props.children, (value, index) => {
            var testKey = value.props.isFor;
            return React.cloneElement(value, {
              valType: testKey,
              name: this.props.name,
              key: 'key' + index,
              test: this.props[testKey],
              changed: this.context.FormState.getIn(['fields', this.context.nameSpace, this.props.name, 'changed']),
              valid: this.context.FormState.getIn(['validations', this.context.nameSpace, this.props.name, 'tests', testKey, 'valid'])
            });
          })}
      </div>
    );
    }
});
