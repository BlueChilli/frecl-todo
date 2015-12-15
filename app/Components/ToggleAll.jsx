import React from "react";
import {completeAll} from "../Actions/Todos";


export default React.createClass({
    toggleAll(e){
      this.props.dispatch(completeAll());
    },
    render() {
      const allMarked = this.props.ToDos.every(todo => todo.get('completed'));
        return (
          <div className="header">
            <input onClick={this.toggleAll} className="toggle-all" type="checkbox"/>
          </div>
        );
    }
});
