import React from "react";
import Input from '../../Frecl/Components/Input/Input.jsx';

export default React.createClass({
    render() {
        return (
          <div className="backend-todo">
            <section className="todoapp">
        			<header className="header">
        				<h1>todos</h1>
        				<input className="new-todo" placeholder="What needs to be done?" autofocus/>
        			</header>
        			<section className="main">
        				<input className="toggle-all" type="checkbox"/>
        				<label for="toggle-all">Mark all as complete</label>
        				<ul className="todo-list">
        					<li className="completed">
        						<div className="view">
        							<input className="toggle" type="checkbox" checked/>
        							<label>Taste JavaScript</label>
        							<button className="destroy"></button>
        						</div>
        						<input className="edit" value="Create a TodoMVC template"/>
        					</li>
        					<li>
        						<div className="view">
        							<input className="toggle" type="checkbox"/>
        							<label>Buy a unicorn</label>
        							<button className="destroy"></button>
        						</div>
        						<input className="edit" value="Rule the web"/>
        					</li>
        				</ul>
        			</section>
        			<footer className="footer">
        				<span className="todo-count"><strong>0</strong> item left</span>
        				<ul className="filters">
        					<li>
        						<a className="selected" href="#/">All</a>
        					</li>
        					<li>
        						<a href="#/active">Active</a>
        					</li>
        					<li>
        						<a href="#/completed">Completed</a>
        					</li>
        				</ul>
        				<button className="clear-completed">Clear completed</button>
        			</footer>
        		</section>
          </div>
        );
    }
});
