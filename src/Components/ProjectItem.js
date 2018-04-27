import React, { Component } from 'react';
import PropTypes from 'prop-types';

//This is the file that is used to display the Project Items on screen

class ProjectItem extends Component {

//This is how you delete projects
deleteProject(id) {
	this.props.onDelete(id);
}

  render() {
    return (
    //This is how you add the project items from App.js to the <li> table.   

      <li className="Project">
      	<strong> {this.props.project.title} : {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a> </strong>
      </li>
    );
  }
}

ProjectItem.propTypes = {
	projects: PropTypes.object,
	onDelete: PropTypes.func
}

export default ProjectItem;
