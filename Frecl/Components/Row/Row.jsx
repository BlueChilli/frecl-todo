import React from "react";
import classnames from "classnames";

export default React.createClass({

    render: function () {
        var classes = classnames('row', this.props.className);
        return <div className={classes}>{this.props.children}</div>;
    }
});
