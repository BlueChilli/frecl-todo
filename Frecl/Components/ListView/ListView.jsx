import React from "react";
import {Map} from "immutable";
import {connect} from "react-redux";
import {addListItem, removeListItem} from "./Actions/ListView";

const ListView = React.createClass({
  closeListItem(index){
    this.props.dispatch(removeListItem(this.props.component, this.props.id, index));
  },
  render() {
    const listItems = this.props.listIds.getIn([this.props.component, this.props.id], Map());

    return (
      <div {...this.props}>
        {
          listItems.map((value, index) => {
            return React.cloneElement(value, {
              close: this.closeListItem.bind(this, index),
              key: index
              });
            }).valueSeq()
          }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    listIds: state.get('ListViewState')
  }
}


export default connect(mapStateToProps)(ListView);
export {addListItem, removeListItem};