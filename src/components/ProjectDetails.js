import React from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import FeatureDetails from './FeatureDetails';
import FeatureForm from './FeatureForm';
import ProjectOverlay from './ProjectOverlay';
import { dragscroll } from 'dragscroll';

const ProjectDetails = ({project}) => {
    const addFeature = (e) => {
        document.getElementById('featureForm'+project.id).style.display = 'block';
        // this line adds focus text input field of feature form. There is def a better way to do this.
        document.getElementById('featureForm'+project.id).children[0].children[2].children[0].focus();
    }
    const projectOverlay = (e) => {
        document.getElementById('projectOverlay'+project.id).style.display = 'block';
        // this line adds focus text input field of project overlay. There is def a better way to do this.
        document.getElementById('projectOverlay'+project.id).children[0].children[1].children[0].focus();
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
                    <div className='featureCounter'>
                        {project.totalDone}/{project.features.length} done
                    </div>
                    <div className='projectTitle' onClick={projectOverlay}>{project.title}</div>
                    <div className='addFeature' onClick={addFeature}>
                        &oplus; <br/> add a feature
                    </div>
                </div>
            </div>
            <div className="featureList dragscroll" id={'feature'+project.id}>
                {project.features.map(feature => {
                        return (<FeatureDetails feature={feature} project={project} key={feature.id} />)
                    })}
            </div>
        </div>
    );
}
 
export default ProjectDetails;