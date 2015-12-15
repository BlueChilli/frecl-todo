import React from "react";
import "./InputGroup.scss";

export default React.createClass({
    render() {
        var displayInput = () => {
            if (this.props.prepend) {
                return (
                    <div className="input-group">
                        <span className="input-prepend">{this.props.prepend}</span>
                        {this.props.children}
                    </div>
                );
            } else if (this.props.append) {
                return (
                    <div className="input-group">
                        {this.props.children}
                        <span className="input-append">{this.props.append}</span>
                    </div>
                )
            } else {
                return this.props.children;
            }
        };
        return displayInput();
    }
});

