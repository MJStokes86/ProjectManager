import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

//This is the form file that is used to add projects
//This is what you do to add a form to your app

class AddProject extends Component {
	constructor() {
		super(); 
		this.state = {
			newProject:{}
		}
	}

//This is where you set the options for the <select> menu. 
	static defaultProps = {
		categories: ['Web Design', 'Web Development', 'Mobile Development']
	}
//This is how you get the submit button to work
	handleSubmit(e) {
		if (this.refs.title.value === '') {
			alert('Title is required');
		} else {
			this.setState({newProject: {
				id: uuid.v4(),
				title: this.refs.title.value,
				category: this.refs.category.value
			}}, function(){
				//console.log(this.state);
				this.props.addProject(this.state.newProject);
			});
		}
		e.preventDefault();

	}

	render() {

		//This is how you display all the categories as options for the <select> key

		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value={category}>{category}</option>
		});
     return (
      <div>

      	<h3> Add Project </h3>
      	<form onSubmit={this.handleSubmit.bind(this)}> 
      		<div>
      			<label>Title</label>
      			<input type="text" ref="title" />
      		</div>
      		<div>
      		<br /> 
      			<label>Category</label><br />
      			<select ref="category">
      			{categoryOptions}

      			</select>
      		</div>
      		<br />
      		<input type="submit" value="Submit" />
      	</form>
      
      </div>
    );
  }
}

AddProject.propTypes = {
	categories: PropTypes.array,
	addProject: PropTypes.func
}


export default AddProject;
