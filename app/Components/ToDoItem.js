import React from "react";
import classnames from "classnames";
import {deleteTodo, toggleTodo, editTodo} from "../Actions/Todos";

export default React.createClass({
  getInitialState(){
    return {
      editing: false
    }
  },
  deleteTodo(e){
    this.props.dispatch(deleteTodo(this.props.Item.get('id')));
  },
  toggleTodo(e){
    this.props.dispatch(toggleTodo(this.props.Item.get('id')));
  },
  showEditDialogue(){
    this.setState({
      editing: true
    },() => {
      this.refs[this.getEditRef()].focus();
    });
  },
  cancelEdit(){
    this.setState({
      editing: false
    });
  },
  closeEditTodo(e){
    if(e.nativeEvent.keyCode === 13){
      this.cancelEdit()
    }
  },
  editTodo(){
    const value = this.refs[this.getEditRef()].value;
    this.props.dispatch(editTodo(this.props.Item.get('id'), value));
  },
  getEditRef(){
    return "edit" + this.props.Item.get('id')
  },
  render() {
    const classes = classnames({
        completed: this.props.Item.get('completed'),
        editing: this.state.editing
      });
    return (
      <li className={classes}>
        <div className="view">
          <input title={"Toggle " + this.props.Item.get('text')} className="toggle" onChange={this.toggleTodo} type="checkbox" checked={this.props.Item.get('completed')}/>
            <label onDoubleClick={this.showEditDialogue}>{this.props.Item.get('text')}</label>
          <button onClick={this.deleteTodo} title="Delete todo" className="destroy"></button>
        </div>
        <input ref={this.getEditRef()} onKeyPress={this.closeEditTodo} onChange={this.editTodo} onBlur={this.cancelEdit} className="edit" value={this.props.Item.get('text')}/>
      </li>
    );
  }
});
