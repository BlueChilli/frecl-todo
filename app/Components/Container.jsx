import React from "react";
import {Link} from "react-router";

export default React.createClass({
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">BackEnd ToDo</Link></li>
                        <li><Link to="/Designer">Designer ToDo</Link></li>
                        <li><Link to="/ToDo/All">Shane's Todo</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    {this.props.children || "That component doesn't seem to exist... How troubling :("}
                </div>
            </div>

        );
    }
});
