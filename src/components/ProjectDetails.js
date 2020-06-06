import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import FeatureList from './FeatureList';

const ProjectDetails = () => {
    const {project} = useContext(ProjectContext);
    console.log(project)
    return (
        <div className="projectDetail">
            <h1>{project.title}</h1>
            <FeatureList features={project.features}/>
        </div>
    );
}
 
export default ProjectDetails;