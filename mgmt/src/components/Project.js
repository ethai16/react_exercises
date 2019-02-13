import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem'

class Project extends React.Component {
    constructor(props) {
        super(props);
        
    }

    deleteProject(id){
        this.props.onDelete(id)
    }

    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project=>{
                return <div><ProjectItem key={project.title} project={project} onDelete = {this.deleteProject.bind(this)}/></div>
            })
        }
        return (
            <div>{projectItems}</div>
        );
    }
}


Project.propTypes = {
    
};

export default Project
