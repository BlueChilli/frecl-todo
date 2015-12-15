import React from "react";
import classnames from "classnames";
import Switch from "../Switch/Switch.jsx";

export default React.createClass({

    render() {
        var {className, ...other} = this.props;
        var classes = classnames(className, 'checkbox');
        return (
            <Switch type="checkbox" className={classes} {...other}/>
        );
    }
});