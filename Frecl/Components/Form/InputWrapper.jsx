import React, {PropTypes} from "react";
import classnames from "classnames";

export default React.createClass({
  contextTypes: {
    nameSpace: PropTypes.string,
    FormState: PropTypes.object
  },

  propTypes: {
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    className: PropTypes.string
  },

  getInputValidationState(){
    const validationArray = this.context.FormState.getIn(['validations', this.context.nameSpace, this.props.name, 'tests']);
    if (validationArray) {
      return validationArray.every(value => {
        return value.get('valid');
      });
    }
    return true;
  },

  getChangedState(){
    return this.context.FormState.getIn(['fields', this.context.nameSpace, this.props.name, 'changed']);
  },

  render() {
    var displayPostfix = () => {
      if (this.props.labelPostfix) {
        return <div className="input-label-postfix">{this.props.labelPostfix}</div>
      }
      return null;
    };
    var classes = classnames('input', this.props.className, {
      'input-hidden': this.props.type === 'hidden',
      'input-error': !this.getInputValidationState() && this.getChangedState()
    });
    return (
      <div className={classes} key={this.props.name}>
        <div className="input-label-wrapper">
          <label className="input-label" htmlFor={this.props.name}>{this.props.label}</label>
          {displayPostfix()}
        </div>
        {this.props.children}
      </div>
    );
  }
});
