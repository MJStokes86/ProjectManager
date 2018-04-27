import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem"; //You are importing the project items from this

class Todos extends Component {

	render() {
		let todoItems;
//Testing for projects
	if(this.props.todos) {
		//You use .map since projects is an array
		todoItems = this.props.todos.map(todo => {
			//console.log(project);
			return (

			//Where the div className="Projects" is, that is where you assign the projects from the "projectItem" variable


				//This is the component where you are passing each project as a property

				<TodoItem  key={todo.title} todo={todo} />

			);		
		});
	}
     return (
      <div className="Todos">
      <h3> Todo List </h3>
      {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
	todos: PropTypes.array
}

export default Todos;
