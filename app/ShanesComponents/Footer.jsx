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
    const completedCount = completedTodos.count();
    const showClear = () => {
      if(this.props.ToDos.count() - completedCount === 0) return null;
      return <button onClick={this.clearCompleted} className="clear-completed">Clear completed</button>
    }
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{completedCount}</strong> {completedCount > 1 || completedCount === 0 ? "items" : "item"} left</span>
        <ul className="filters">
          <li>
            <Link activeClassName="selected" to={"/" + this.props.basePath + "/all"}>All</Link>
          </li>
          <li>
            <Link activeClassName="selected" to={"/" + this.props.basePath + "/active"}>Active</Link>
          </li>
          <li>
            <Link activeClassName="selected" to={"/" + this.props.basePath + "/completed"}>Completed</Link>
          </li>
        </ul>
        {showClear()}
      </footer>
    );
  }
});
