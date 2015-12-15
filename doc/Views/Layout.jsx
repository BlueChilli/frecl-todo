import React from "react";
import {Link} from "react-router";

import "./../Styles/main.scss";
import "../../Frecl/styles/_normalize.scss";
import logo from "./../Assets/logo.png";

export default React.createClass({
    render() {
        return (
            <div>
                <nav className="docs-nav">
                    <header>
                        <Link activeClassName="active" to="/">
                            <img src={logo} height="210"/>
                        </Link>

                    </header>
                    <div className="nav-container">

                        <h2>App</h2>
                        <ul>
                            <li><Link activeClassName="active" to="/">Home</Link></li>
                            <li><Link activeClassName="active" to="/style-guide">Style Guide</Link></li>
                        </ul>

                        <h2>Concepts</h2>

                        <ul>
                            <li><Link activeClassName="active" to="/doc">Stuff</Link></li>
                        </ul>

                        <h2>Components</h2>
                        <ul>
                            <li><Link activeClassName="active" to="/doc/component/DatePicker">Date Picker</Link></li>
                            <li><Link activeClassName="active" to="/doc/component/Spinner">Spinner</Link></li>
                        </ul>
                    </div>

                </nav>
                <div className="docs-container">
                    {this.props.children || "That component doesn't seem to exist... How troubling :("}
                </div>
            </div>

        );
    }
});

