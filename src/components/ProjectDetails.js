import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import FeatureDetails from './FeatureDetails';

const ProjectDetails = ({project}) => {
    return (
        <div className="projectDetail">
            <div className='projectTitle'>{project.title}</div>
            {project.features.map(feature => {
                    return (<FeatureDetails feature={feature} key={feature.id} />)
                })}
        </div>
    );
}
 
export default ProjectDetails;