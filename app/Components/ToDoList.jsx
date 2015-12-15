import React from "react";
import classnames from "classnames";
import ToDoItem from "./ToDoItem";

export default React.createClass({
    render() {
        return (
          <ul className="todo-list">
            {this.props.ToDos.map(Item => <ToDoItem Item={Item} key={Item.get('id')} dispatch={this.props.dispatch}/>)}
          </ul>
        );
    }
});
