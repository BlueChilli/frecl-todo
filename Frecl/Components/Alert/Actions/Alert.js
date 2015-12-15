import {addListItem} from "../../ListView/Actions/ListView";
import AlertItem from "../AlertItem.jsx";
import React from "react";
import {COMPONENT_NAME} from "../Alert.jsx";

export function addAlertItem(id, header, body, type) {
  return function (dispatch) {
    dispatch(
      addListItem(COMPONENT_NAME, id, React.createElement(AlertItem, {
        header,
        body,
        type
      }))
    );
  }
}