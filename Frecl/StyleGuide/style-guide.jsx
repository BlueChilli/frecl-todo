import React from "react";
import {connect} from "react-redux";
import StyleGuide from "react-style-guide";
import {Row, Col, Form as FreclForm, Input, Validation, CheckBox, Radio, RadioTab, RadioTabs, Select, TextArea} from "../exports";
import Modal, {toggleModal} from "../Components/Modal/Modal.jsx";
import Alert, {addAlertItem} from "../Components/Alert/Alert.jsx";
import "./style-guide.scss";

const FreclStyleGuide = React.createClass({
  handleSubmit(e, fields){
    console.log(fields.toJS());
  },
  lastNameValidation(value){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value !== '1') {
          resolve(value === 'Shane');
        }
        reject(new Error("OMG not a one"));
      }, 1000);
    });
  },
  addSuccess(){
    this.props.dispatch(addAlertItem('alerts', 'Great success', 'This is a successful alert', 'success'));
  },
  addWarning(){
    this.props.dispatch(addAlertItem('alerts', 'Oh oh', 'Seems something odd has occurred', 'warning'));
  },
  addDanger(){
    this.props.dispatch(addAlertItem('alerts', '99 Problems', 'You got 99 Problems and this error report is one', 'danger'));
  },
  toggleModal(){
    this.props.dispatch(toggleModal('modal'));
  },
  render() {
    return (
      <div className="container">
        <StyleGuide title="Alerts">
          <Alert id="alerts"/>
          <button onClick={this.addSuccess}>Add Success</button>
          <button onClick={this.addWarning}>Add Warning</button>
          <button onClick={this.addDanger}>Add Danger</button>
        </StyleGuide>
        <StyleGuide title="Modals">
          <Modal id="modal">
            Toggle View
          </Modal>
          <button onClick={this.toggleModal}>Show Modal</button>
        </StyleGuide>
        <FreclForm name="StyleGuide" onSubmit={this.handleSubmit}>
          <StyleGuide title="Inputs">
            <Input autoFocus label="First Name" required pattern="[A-Za-z]+$" name="FirstName">
              <Validation isFor="required">First Name is required</Validation>
              <Validation isFor="pattern">First Name must be only A-Z</Validation>
            </Input>
            <Input label="Last Name" name="LastName" customValidation={this.lastNameValidation}>
              <Validation isFor="customValidation">Custom validation failed</Validation>
            </Input>
            <Input label="Currency" type="text" mask="$0,0" required min="10" max="100000" pattern="[0-9]"
                   name="Currency">
              <Validation isFor="required">Currency is required</Validation>
              <Validation isFor="pattern">Currency must be a number</Validation>
              <Validation isFor="min">Currency must be greater then 9</Validation>
              <Validation isFor="max">Currency must be less then 100001</Validation>
            </Input>
            <Input label="Password" minLength="5" type="password" required name="Password">
              <Validation isFor="required">Password is required</Validation>
              <Validation isFor="minLength">Password must be 5 characters long</Validation>
            </Input>
          </StyleGuide>
          <StyleGuide title="Text Areas">
            <TextArea label="Write something" name="something"/>
            <TextArea label="With validation" required name="withValidation">
              <Validation isFor="required">With validation is required</Validation>
            </TextArea>
          </StyleGuide>
          <StyleGuide title="Switches">
            <div className="switch-container">
              <CheckBox id="tandc" required label="Terms and Conditions" name="tandcs">
                <Validation isFor="required">Please accept the T&Cs</Validation>
              </CheckBox>
            </div>
            <div className="switch-container">
              <CheckBox id="red" label="Red" required name="color[]"/>
              <CheckBox id="blue" label="Blue" required name="color[]"/>
              <CheckBox defaultChecked id="green" label="Green" required name="color[]"/>
            </div>
            <div className="switch-container">
              <Radio name="size" label="Extra Small" id="x-small"/>
              <Radio name="size" label="Small" id="small" defaultChecked={true}/>
              <Radio name="size" label="Medium" id="medium"/>
              <Radio name="size" label="Large" id="large"/>
            </div>
            <RadioTabs name="BackEndDevelopers" label="Back End Developers">
              <RadioTab id="Max" label="Max" name="Max"/>
              <RadioTab id="Dave" label="Dave" name="Dave"/>
              <RadioTab id="Ella" label="Ella" name="Ella"/>
            </RadioTabs>
          </StyleGuide>
          <StyleGuide title="Select">
            <Select label="Front End Developers" name="FrontEndDevelopers">
              <option value="Shane">Shane</option>
              <option value="Mick">Mick</option>
              <option value="Mitch">Mitch</option>
            </Select>
          </StyleGuide>
          <button>Submit</button>
        </FreclForm>
      </div>
    );
  }
});

export default connect()(FreclStyleGuide);
