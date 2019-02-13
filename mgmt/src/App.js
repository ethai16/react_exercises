import React, { Component } from 'react';
import Project from './components/Project';
import AddProject from './components/AddProject';
import uuid from 'uuid'

class App extends Component {
  constructor(){
    super();
  }
  componentWillMount() {
    this.setState({
      projects: [
        {
          id:uuid.v4(),
          title: 'Dating App',
          category: 'Front-End'
        },
        {
          id:uuid.v4(),
          title: 'School CRM',
          category: 'Full-Stack'
        },
        {
          id:uuid.v4(),
          title: 'ECommerce',
          category: 'React-Redux'
        }
      ]
    })
  }

  handleAddProject(project){
    let newProjects = this.state.projects;
    newProjects.push(project);
    this.setState({projects: newProjects})
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id ===id);
    console.log(index)
    projects.splice(index, 1)
    this.setState({projects: projects})
  }

  render() {
    return (
      <div >
        <Project projects={this.state.projects} onDelete = {this.handleDeleteProject.bind(this)}/>
        <AddProject handleAddProject = {this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
