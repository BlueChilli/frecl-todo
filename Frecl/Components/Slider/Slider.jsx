import React from "react";
import ReactSlider from "react-slider";
import classnames from "classnames";
import InputWrapper from "../Form/InputWrapper.jsx";
import {InputSetUpMixin, connectInput, onInputChange} from '../Form/Mixins/InputSetUp.js';

import "./Slider.scss";

var Slider = React.createClass({
    mixins: [InputSetUpMixin],
    handleChange(value){
        onInputChange(this.nameSpace, this.props, value);
    },
    render() {
        var {name, labelPostfix, label, className, ...others} = this.props;
        var classes = classnames(className);
        return (
            <InputWrapper name={name} className={classes} labelPostfix={labelPostfix} label={label}>
                <ReactSlider onChange={this.handleChange} {...others}/>
            </InputWrapper>
        )
    }
});

export default connectInput(Slider);
