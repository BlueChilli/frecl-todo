import React from "react";
import {connect} from "react-redux";
import ToggleView from "../ToggleView/ToggleView.jsx";
import {toggleModal} from "./Actions/Modal";
import classnames from "classnames";
import close from "./cross.svg";
import "./Modal.scss";


export const COMPONENT_NAME = "Modal";

const Modal = React.createClass ({
  toggleModal(){
    this.props.dispatch(toggleModal(this.props.id));
  },
  render: function () {
    return (
      <ToggleView component={COMPONENT_NAME} id={this.props.id}>
        <div className="modal-wrapper">
          <div onClick={this.toggleModal} className="modal-background"></div>
          <div className="modal">
            <div className="modal-header">
              <h1>{this.props.title}</h1>
            </div>
            <div className="modal-content">
              {this.props.children}
            </div>
            <button className="modal-close" onClick={this.toggleModal}>
              <img src={close} alt="Close Button"/>
            </button>
          </div>
        </div>
      </ToggleView>
    );
  }
});

export default connect()(Modal);
export {toggleModal}
