import React from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import FeatureDetails from './FeatureDetails';
import ProjectForm from './ProjectForm';

const ProjectDetails = ({project}) => {
    const addProject = (e) => {
        document.getElementById('overlay'+project.id).style.display = 'block';
    }
    return (
        <div className="projectDetail">
            <div className="projectOverlay">
                <div id={'overlay'+project.id}>
                    <ProjectForm project={project}/>
                </div>
            </div>
            <div className='project'>
                <div className="projectContainer">
                    <div className='projectTitle'>{project.title}</div>
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