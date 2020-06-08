import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import FeatureDetails from './FeatureDetails';

const ProjectDetails = ({project}) => {
    return (
        <div className="projectDetail">
            <div className='project'>
                <div className="projectContainer">
                    <div className='projectTitle'>{project.title}</div>
                    <div className='addFeature'>&oplus; <br/> add a feature</div>
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