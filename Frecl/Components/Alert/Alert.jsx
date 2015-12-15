import React from "react";
import ListView from "../ListView/ListView.jsx";
export {addAlertItem} from "./Actions/Alert";
export const COMPONENT_NAME = "Alerts";

export default React.createClass({
  render() {
    return <ListView className="alerts" component={COMPONENT_NAME} id={this.props.id}/>;
  }
});

