import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {setToggleView, toggleToggleView} from "./Actions/toggleView";

const ToggleView = React.createClass({
  propTypes: {
    id: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired
  },
  getDefaultProps(){
    return {
      visible: false
    }
  },
  componentWillMount(){
    this.props.dispatch(setToggleView(this.props.component, this.props.id, this.props.visible));
  },
  componentWillUnmount(){
    //TODO: remove from state
  },
  getValidElement(element, className){
    if (React.isValidElement(element)) {
      return React.cloneElement(element, {
        className
      })
    }
    return <span className={className}>{element}</span>;
  },
  render() {
    if (!this.props.visibleItems.getIn([this.props.component, this.props.id])) {
      return null;
    }
    return this.getValidElement(this.props.children, this.props.className);
  }
});

const mapStateToProps = function (state) {
  return {
    visibleItems: state.get('ToggleViewState')
  }
};

export default connect(mapStateToProps)(ToggleView);
export {toggleToggleView}