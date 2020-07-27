import React from 'react';
import TaskDetails from './TaskDetails';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskForm from './TaskForm';
import FeatureOverlay from './FeatureOverlay';

const FeatureDetails = ({feature, project, index}) => {
    const isDone = () => {
        if(project.doneFeatures.includes(feature.id)) {
            return " done";
        } else {
            return "";
        }
    }
    const overlayOn = (e) => {
        document.getElementById('featureOverlay'+feature.id).style.display = 'block';
        //these lines focus the cursor to the end of the textarea.
        const textarea = document.getElementById('featureOverlay'+feature.id).children[0].children[2];
        textarea.value = '';
        textarea.value = feature.title;
        textarea.focus();
    }
    return ( 
            <Draggable draggableId={feature.id} index={index}>
                {provided => (
                    <div className={'featureContainer' + isDone()} id={feature.id} {...provided.draggableProps} ref={provided.innerRef}>
                        <div className='featureWrap'>
                            <div className="overlayContainer">
                                <div id={'featureOverlay'+feature.id}>
                                    <FeatureOverlay feature={project.features[feature.id]} project={project}/>
                                </div>
                            </div>
                            <div className="featureTitle" onClick={overlayOn} {...provided.dragHandleProps} type='task'>{feature.title}</div>
                            <hr/>
                            <div className='taskContainer' id={'task'+feature.id}>
                                <div className={'taskWrap' + isDone()}>
                                    <Droppable droppableId={feature.id}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                {feature.taskIds.map((taskId, index) => {
                                                    return(<TaskDetails key={taskId} feature={feature} project={project} task={project.tasks[taskId]} index={index} />);
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                                <TaskForm feature={feature} project={project} />
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
    );
}
 
export default FeatureDetails;