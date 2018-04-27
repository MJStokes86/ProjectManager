import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from "./ProjectItem"; //You are importing the project items from this

class Projects extends Component {

	deleteProject(id) {
		this.props.onDelete(id);
	}

	render() {
		let projectItems;
//Testing for projects
	if(this.props.projects) {
		//You use .map since projects is an array
		projectItems = this.props.projects.map(project => {
			//console.log(project);
			return (

			//Where the div className="Projects" is, that is where you assign the projects from the "projectItem" variable


				//This is the component where you are passing each project as a property

				<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />

			);		
		});
	}
     return (
      <div className="Projects">
      <h3> Latest Projects </h3>
      {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
	projects: PropTypes.array,
	onDelete: PropTypes.func
}

export default Projects;
