import React from "react";
import classnames from "classnames";

export default React.createClass({
  render() {
    const classes = classnames('alert', this.props.type);
    return (
      <div className={classes}>
        <h3>{this.props.header}</h3>
        <p>{this.props.body}</p>
        <button className="close" onClick={this.props.close}>x</button>
      </div>
    );
  }
});