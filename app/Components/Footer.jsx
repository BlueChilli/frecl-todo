import React from "react";
import {Link} from "react-router";
import {clearCompleted} from "../Actions/Todos";

export default React.createClass({
  clearCompleted(){
    this.props.dispatch(clearCompleted());
  },
  render() {
    const completedTodos = this.props.ToDos.filter(todo => {
      return !todo.get('completed');
    });
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{completedTodos.count()}</strong> {completedTodos.count() > 1 || completedTodos.count() === 0 ? "items" : "item"} left</span>
        <ul className="filters">
          <li>
            <Link activeClassName="selected" to="/ToDo/all">All</Link>
          </li>
          <li>
            <Link activeClassName="selected" to="/ToDo/active">Active</Link>
          </li>
          <li>
            <Link activeClassName="selected" to="/ToDo/completed">Completed</Link>
          </li>
        </ul>
        <button onClick={this.clearCompleted} className="clear-completed">Clear completed</button>
      </footer>
    );
  }
});
