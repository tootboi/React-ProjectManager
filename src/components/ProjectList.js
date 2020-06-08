import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import ProjectDetails from './ProjectDetails';

const ProjectList = () => {
    const {projects} = useContext(ProjectContext);
    return projects.length ? (
        <div className="projectList">
                {projects.map(project => {
                    return (<ProjectDetails project={project} key={project.id}/>)
                })}
                <div className="addProject">&oplus; add a new project</div>
        </div>
    ) : (
        <div className="addProject">&oplus; add a new project</div>
    );
}
 
export default ProjectList;