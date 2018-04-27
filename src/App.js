import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects'; //This adds the projects to the screen
import AddProject from './Components/AddProject'; //This adds the form to the screen
import './App.css';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Todos from './Components/Todos';



//App.js is the main file that controls the entire site. This where you import Components. 



class App extends Component { //This is where you set the state for the projects and the todos. 
  constructor () {
    super();

      this.state = {
      projects: [],
      todos: []
    }
  }

  //This is how you bring in API data

  getTodos() {
    $.ajax({
      url:"https://jsonplaceholder.typicode.com/todos",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {
          console.log(this.state);
        });

      }.bind(this),
      error: function(xhr, status, err) {
            console.log(err);
      }
    })

  } 

  //This is how you store data

  getProjects() {

    this.setState({projects: [
      { 
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      { 
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
      ]});

  }

  



  //componentWillMount() is a life cycle method that fires off everytime the component is re-rendered

    componentWillMount() {
      
      this.getProjects();
      this.getTodos();

    }

    componentDidMount() {

        this.getTodos();


    }

    //This is how you make the new added projects appear on the screen

    handleAddProject(project) {
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects: projects});
    }

    //This is how you delete projects

    handleDeleteProject(id) {
      let projects = this.state.projects;
      let index = projects.findIndex(x => x.id === id);
      projects.splice(index, 1);
      this.setState({projects:projects});
    }
    
  render() {
    console.log(this.props)
    return (
      //The <Projects /> component is where you pass in the projects as a property
      //The <AddProject /> component is where you pass in the form where you add new projects
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
       <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
       <hr />
       <Todos todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
