import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import ProjectDetails from './ProjectDetails';
import ProjectForm from './ProjectForm';

const ProjectList = () => {
    const {projects} = useContext(ProjectContext);

    const addProject = (e) => {
        document.getElementById('projectForm').style.display = 'block';
        // this line adds focus text input field of project form. There is def a better way to do this.
        document.getElementById('projectForm').children[0].children[1].children[0].focus();
    }
    return projects.length ? (
        <div className="projectList">
            <div className="overlayContainer">
                <div id='projectForm'>
                    <ProjectForm/>
                </div>
            </div>
            {projects.map(project => {
                return (<ProjectDetails OgProject={project} key={project.id}/>)
            })}
            <div className="addProject" onClick={addProject}>&oplus; add a new project</div>
        </div>
    ) : (
        <div>
            <div className="overlayContainer">
                <div id='projectForm'>
                    <ProjectForm/>
                </div>
            </div>
            <div className="addProject" onClick={addProject}>&oplus; add a new project</div>
        </div>
    );
}
 
export default ProjectList;