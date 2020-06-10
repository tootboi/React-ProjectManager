import React from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import FeatureDetails from './FeatureDetails';
import FeatureForm from './FeatureForm';
import ProjectOverlay from './ProjectOverlay';

const ProjectDetails = ({project}) => {
    const addProject = (e) => {
        document.getElementById('featureForm'+project.id).style.display = 'block';
    }
    const deleteProject = (e) => {
        document.getElementById('projectOverlay'+project.id).style.display = 'block';
    }
    return (
        <div className="projectDetail">
            <div className="overlayContainer">
                <div id={'featureForm'+project.id}>
                    <FeatureForm project={project}/>
                </div>
                <div id={'projectOverlay'+project.id}>
                    <ProjectOverlay project={project}/>
                </div>
            </div>
            <div className='project'>
                <div className="projectContainer">
                    <div className='projectTitle' onClick={deleteProject}>{project.title}</div>
                    <div className='addFeature' onClick={addProject}>
                        &oplus; <br/> add a feature
                    </div>
                </div>
            </div>
            <div className="featureList">
                {project.features.map(feature => {
                        return (<FeatureDetails feature={feature} key={feature.id} />)
                    })}
            </div>
        </div>
    );
}
 
export default ProjectDetails;