import React from "react";
import {connect} from "react-redux";
import ShowCode from "../../../../../doc/Helper/ShowCode.jsx";
import {Spinner, inlineStandard, inlineFlower, lineHeader} from '../../Spinner.jsx';
import * as spinnerAction from '../../Actions.js';

const demo = React.createClass({

    getInitialState(){
        return {
            spinHide1: true
        }
    },

    spinnerHide(id){
        console.log("spinnerHide");
        this.props.spinnerHide(id);
    },

    spinnerShow(id){
        console.log("spinnerShow");
        this.props.spinnerShow(id);
    },

    showInlineButton(id){
        //
        if (this.props.spinnerState.get(id) === true) {
            return <button onClick={this.spinnerHide.bind(null, id)}>Hide</button>
        } else {
            return <button onClick={this.spinnerShow.bind(null, id)}>Show</button>
        }
    },

    render: function () {
        return (
            <div>

                <h2>Quick Demo</h2>

                <ShowCode>
                    {require('./s1.txt')}
                </ShowCode>

                <div style={{height:"60px"}}>
                    <Spinner type={inlineStandard} id="demo1" top="-7" left="70"/>
                    {this.showInlineButton('demo1')}
                </div>

                <h2>Using another spinner component</h2>

                <ShowCode>
                    {require('./s2.txt')}
                </ShowCode>

                <div style={{height:"60px"}}>
                    <Spinner type={inlineFlower} id="demo2" top="1" left="80"/>
                    {this.showInlineButton('demo2')}
                </div>

                <h2>Using another spinner component</h2>

                <ShowCode>
                    {require('./s2.txt')}
                </ShowCode>

                <div style={{height:"60px"}}>
                    <Spinner type={lineHeader} id="demo3" top="1" left="80"/>
                    {this.showInlineButton('demo3')}
                </div>

            </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        "spinnerState": state.get("Spinner")
    };
}

function mapDispatchToProps(dispatch) {
    return {
        spinnerShow: (id) => dispatch(spinnerAction.show(id)),
        spinnerHide: (id) => dispatch(spinnerAction.hide(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(demo);

