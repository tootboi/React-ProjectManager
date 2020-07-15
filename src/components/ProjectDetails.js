import React from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import FeatureDetails from './FeatureDetails';
import FeatureForm from './FeatureForm';
import ProjectOverlay from './ProjectOverlay';
import FeatureOverlay from './FeatureOverlay';

const ProjectDetails = ({project}) => {
    const expandProject = (e) => {
        if(project.features.length > 0) {
            document.getElementById('projectDetail'+project.id).classList.toggle('expanded');
            document.getElementById('feature'+project.id).classList.toggle('expandList');
            const featureList = [...document.getElementById('feature'+project.id).children];
            console.log(featureList);
            featureList.forEach(feature => {
                feature.classList.toggle('largerFeature');
            })
        }
    }
    const addFeature = (e) => {
        document.getElementById('featureForm'+project.id).style.display = 'block';
        // this line adds focus text input field of feature form. There is def a better way to do this.
        document.getElementById('featureForm'+project.id).children[0].children[2].children[0].focus();
    }
    const projectOverlay = (e) => {
        document.getElementById('projectOverlay'+project.id).style.display = 'block';
        // this line adds focus text input field of project overlay. There is def a better way to do this.
        document.getElementById('projectOverlay'+project.id).children[0].children[1].focus();
    }
    return (
        <div className="projectDetail" id={'projectDetail'+project.id}>
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
                    <div className='featureCounter' onClick={expandProject}>
                        {project.totalDone}/{project.features.length} done
                    </div>
                    <div className='projectTitle' onClick={projectOverlay}>{project.title}</div>
                    <div className='addFeature' onClick={addFeature}>
                        &oplus; <br/> add a feature
                    </div>
                </div>
            </div>
            <div className="overlayContainer">
                {project.features.map(feature => {
                    return (<div id={'featureOverlay'+feature.id}>
                                <FeatureOverlay feature={feature} project={project}/>
                            </div>
                            );
                })}
            </div>
            <div className="featureList" id={'feature'+project.id}> 
                {project.features.map(feature => {
                    return (<FeatureDetails feature={feature} project={project} key={feature.id} />)
                })}
            </div>
        </div>
    );
}
 
export default ProjectDetails;