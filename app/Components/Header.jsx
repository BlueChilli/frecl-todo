import React from "react";
import {addTodo} from "../Actions/Todos";


export default React.createClass({
    addToDo(e){
      e.preventDefault();
      const todo = this.refs.addToDo.value;
      this.props.dispatch(addTodo(todo));
      this.refs.addToDo.value = "";
    },
    render() {
        return (
          <header className="header">
            <h1>todos</h1>
            <form onSubmit={this.addToDo}>
              <input ref="addToDo" className="new-todo" placeholder="What needs to be done?" autofocus/>
            </form>
          </header>
        );
    }
});
