import React from "react";
import {connect} from "react-redux";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import ToDoList from "../Components/ToDoList.jsx";
import ToggleAll from "../Components/ToggleAll.jsx";

const ToDoMain = React.createClass({
  getFilteredItems(){
    switch (this.props.params.splat) {
      case 'ToDo/all':
        return this.props.ToDos;
      case 'ToDo/completed':
        return this.props.ToDos.filter(todo => todo.get('completed'));
      case 'ToDo/active':
        return this.props.ToDos.filter(todo => !todo.get('completed'));
      default:
        return this.props.ToDos;
    }
  },
  render() {
    return (
      <div>
        <section className="todoapp">
          <Header dispatch={this.props.dispatch}/>
          <section className="main">
            <ToggleAll dispatch={this.props.dispatch} ToDos={this.getFilteredItems()}/>
            <ToDoList dispatch={this.props.dispatch} ToDos={this.getFilteredItems()}/>
          </section>
          <Footer dispatch={this.props.dispatch} ToDos={this.props.ToDos}/>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          <p>Created by <a href="http://todomvc.com">Shane Patrick</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    );
  }
});

function mapStateToProps(state){
  return {
    ToDos: state.get('Todos')
  };
}

export default connect(mapStateToProps)(ToDoMain)
