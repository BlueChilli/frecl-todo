import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import {defer} from "lodash";
import { setAllInputInteractions } from "./Actions/fields";
import { removeAllFormValidation } from "./Actions/validations";
import { testForm } from "./Helpers/validation";

var Form = React.createClass({
    submitted: false,

    propTypes: {
        name: PropTypes.string.isRequired,
        className: PropTypes.string,
        onSubmit: PropTypes.func
    },

    childContextTypes: {
        FormState: PropTypes.object,
        nameSpace: PropTypes.string,
        dispatch: PropTypes.func
    },

    getChildContext(){
        return {
            FormState: this.props.FormState,
            nameSpace: this.props.name,
            dispatch: this.props.dispatch
        }
    },

    handleSubmit(e){
        e.preventDefault();
        if (!this.submitted) {
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
            }, 2500);

            if (testForm(this.props.FormState.getIn(['validations', this.props.name]))) {
                if (this.props.onSubmit) {
                    const fields = this.props.FormState.getIn(['fields', this.props.name]);
                    const niceFields = fields.map(value => {
                        return value.get('value');
                    });
                    this.props.onSubmit(e, niceFields);
                }
            } else {
                this.props.dispatch(setAllInputInteractions(this.props.name, "changed", true));
                defer(() => {
                    var form = this.refs[this.props.name];
                    const scrollTo = form.querySelector('.input-error').getBoundingClientRect().top;
                    if (scrollTo < 0) {
                        window.scrollTo(0, document.body.scrollTop + scrollTo - 5);
                    }
                });
            }
        }
    },

    componentWillUnmount(){
        this.props.dispatch(removeAllFormValidation(this.props.name));
    },

    render() {
        var classes = classnames('form', this.props.className);
        return (
            <form name={this.props.name} ref={this.props.name} onSubmit={this.handleSubmit} className={classes} noValidate>
                {this.props.children}
            </form>
        );
    }
});

function mapStateToProps(state) {
    return {
        FormState: state.get('FormState')
    };
}

export default connect(mapStateToProps)(Form);
