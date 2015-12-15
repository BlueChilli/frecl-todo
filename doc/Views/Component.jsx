import React from "react";
import * as components from "./../ComponentList.js";
import {Link} from "react-router";
import "../Helper/prism-min.js";
import "../Helper/prism-min.scss";

export default React.createClass({

    showMarkup(){
        return {__html: this.state.readme};
    },

    buildUrl(add = ''){
        return "/doc/component/" + this.props.params.name + add;
    },

    showTabContent(){
        switch (this.props.params.tab) {
            case "recipe":
                return <this.state.recipe/>
            default:
                return <div className="docs-markdown" dangerouslySetInnerHTML={ this.showMarkup() }/>
        }
    },

    componentWillReceiveProps(nextProps){
        const componentName = nextProps.params.name;
        this.setState({
            componentName: componentName,
            readme: components[componentName].readme,
            recipe: components[componentName].recipe
        });

        // This is important
        this.forceUpdate();

    },

    componentDidMount(){
        Prism.highlightAll();
    },

    componentDidUpdate(){
        Prism.highlightAll();
    },

    componentWillMount() {
        this.setState({
            componentName: this.props.params.name,
            readme: components[this.props.params.name].readme,
            recipe: components[this.props.params.name].recipe
        });


    },
    render() {
        return (
            <div>
                <div id="docs-tab">
                    <ul>
                        <li>{this.state.componentName}:</li>
                        <li><Link activeClassName="active" to={this.buildUrl()}>Readme</Link></li>
                        <li><Link activeClassName="active" to={this.buildUrl("/recipe")}>Recipe</Link></li>
                    </ul>
                </div>
                <div>
                    {this.showTabContent()}
                </div>

            </div>
        );
    }
});
