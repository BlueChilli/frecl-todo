import React from "react";
//import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {connect} from "react-redux";
import './Spinner.scss';
import {declare, show, hide} from "./Actions"


const SpinnerComponent = React.createClass({

    // Lets keep it simple
    propTypes: {
        type: React.PropTypes.object,
        id: React.PropTypes.string
    },

    componentWillMount: function () {
        // Sends an action tp add the spinner ID to AppStore
        this.props.declare(this.props.id);
        if (this.props.debug) {
            this.props.show(this.props.id);
        }else{
            this.props.hide(this.props.id);
        }
    },

    _hideOrShow(){
        return (!this.props.Spinners.get(this.props.id)) ? "bcspinner-hide" : "bcspinner-show";
    },

    getStyles(){

        if (this.props.nostyle)return {};
        var styles = {};
        if (this.props.left)styles.left = this.props.left;
        if (this.props.right)styles.right = this.props.right;
        if (this.props.top)styles.top = this.props.top;
        if (this.props.bottom)styles.bottom = this.props.bottom;

        if (!styles) {
            return styles;
        } else {
            styles.position = 'absolute';
        }

        return styles;
    },

    render: function () {
        return (
            <span className={this._hideOrShow()} style={{position:'relative'}}>
                <span style={this.getStyles()}>{this.props.type}</span>
            </span>

        )
    }
});

function mapStateToProps(state) {
    console.log("S", state.get("Spinner").toJS());
    return {
        Spinners: state.get("Spinner")
    }
}

function mapDispatchToProps(dispatch) {
    return {
        declare: (id) => dispatch(declare(id)),
        show: (id) => dispatch(show(id)),
        hide: (id) => dispatch(hide(id))
    };
}

export const Spinner = connect(mapStateToProps, mapDispatchToProps)(SpinnerComponent);

import _reducer from './Reducer';
export let Reducer = _reducer;

/*
 *
 *       Style Collection
 *
 */

// Inline Flower
import inlineFlower from "./Widgets/InlineFlower/markup.jsx";
//export let inlineFlower = _inlineFlower;

// Inline Standard
import inlineStandard from "./Widgets/InlineStandard/markup.jsx";
//export let inlineStandard = _inlineStandard;



// Full Standard
import _fullstandard from "./Widgets/FullStandard/markup.jsx";
export let fullstandard = _fullstandard;

// Full Standard (with no transparency)
import _fullstandardNoTrans from "./Widgets/FullStandardNoTransparent/markup.jsx";
export let fullstandardNoTransparent = _fullstandardNoTrans;

// Full Standard (with Loading)
import _fullstandardloading from "./Widgets/FullStandardLoading/markup.jsx";
export let fullstandardLoading = _fullstandardloading;


// Full Standard (with Loading)
import _hypno from "./Widgets/Hypnospin/markup.jsx";
export let Hypnospin = _hypno;

// Line Header
import lineHeader from "./Widgets/LineHeader/markup.jsx";


export {inlineFlower, inlineStandard, lineHeader}
