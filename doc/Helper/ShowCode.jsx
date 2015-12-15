import React from "react";

const ShowCode = React.createClass({

    render: function () {
        return (
            <div >
                <pre>
                    <code className="language-jsx">{this.props.children}</code>
                </pre>
            </div>
        )
    }
});

export default ShowCode;