import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import FeatureDetails from './FeatureDetails';
import FeatureForm from './FeatureForm';
import ProjectOverlay from './ProjectOverlay';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const ProjectDetails = ({project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [dragProject, setProject] = useState(project);
    // console.log('project: ', project, '\n   drag: ', dragProject);

    const expandProject = (e) => {
        if(project.featureOrder.length > 0) {
            document.getElementById('projectDetail'+project.id).classList.toggle('expanded');
            document.getElementById('feature'+project.id).classList.toggle('expandList');
            const featureList = [...document.getElementById('feature'+project.id).children];
            featureList.forEach(feature => {
                feature.classList.toggle('largerFeature');
            })
            const taskContainers = [...document.getElementsByClassName('taskContainer')];
            taskContainers.forEach(tsakContainer => {
                tsakContainer.classList.toggle('unhide');
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
    const onDragEnd = (result) => {
        const {destination, source, draggableId, type} = result;
        //cancel if there is no destination
        if(!destination) {
            return;
        }
        //check if item was dropped in same place
        if(destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        //check type
        if(type === 'feature') {
            const newFeatureOrder = Array.from(project.featureOrder);
            newFeatureOrder.splice(source.index, 1);
            newFeatureOrder.splice(destination.index, 0, draggableId);
            const newProject = {
                ...project,
                featureOrder: newFeatureOrder,
            }
            setProject(newProject);
            dispatch({type: 'REORDER_FEATURE', reorder: {projectId: project.id, newFeatureOrder: newFeatureOrder}});
            return;
        }
        //reorder
        const feature = project.features[source.droppableId];
            //create a new array rather than mutating original ones
        const newTaskIds = Array.from(feature.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
            //create newFeature using og feature
        const newFeature = {...feature, taskIds: newTaskIds,};
            //newProject
        const newProject = {
            ...project, 
            features: {
                ...project.features,
                [newFeature.id]: newFeature,
            },
        }

        setProject(newProject);
        //need a new reducer called to make changes to the localStorage. need the taskIds array reordered.
        dispatch({type: 'REORDER_TASK', reorder: {projectId: project.id, featureId: feature.id, newTaskIds: newTaskIds}})
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
                        {project.featuresDone}/{project.featureOrder.length} done
                    </div>
                    <div className='projectTitle' onClick={projectOverlay}>{project.title}</div>
                    <div className='addFeature' onClick={addFeature}>
                        &oplus; <br/> add a feature
                    </div>
                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='all-features' direction='horizontal' type='feature'>
                    {provided => (
                        <div className="featureList" id={'feature'+project.id} {...provided.droppableProps} ref={provided.innerRef}> 
                            {project.featureOrder.map((featureId, index) => {
                                return (<FeatureDetails feature={project.features[featureId]} project={project} index={index} key={featureId} />)
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
 
export default ProjectDetails;