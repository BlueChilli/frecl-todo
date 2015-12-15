import React from "react";
import {Link} from "react-router";

export default React.createClass({
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/style-guide">Style Guide</Link></li>
                        <li><Link to="/doc">Docs</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    {this.props.children || "That component doesn't seem to exist... How troubling :("}
                </div>
            </div>

        );
    }
});

