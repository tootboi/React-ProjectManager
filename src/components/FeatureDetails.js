import React from 'react';
import TaskDetails from './TaskDetails';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskForm from './TaskForm';
import FeatureOverlay from './FeatureOverlay';

const FeatureDetails = ({feature, project, index}) => {
    const isDone = () => {
        if(project.doneFeatures.includes(feature.id)) {
            return "featureContainer done";
        } else {
            return "featureContainer";
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
        <div className="feature">
            <div className="overlayContainer">
                <div id={'featureOverlay'+feature.id}>
                    <FeatureOverlay feature={project.features[feature.id]} project={project}/>
                </div>
            </div>
            <Draggable draggableId={feature.id} index={index}>
                {provided => (
                    <div className={isDone()} id={feature.id} {...provided.draggableProps} ref={provided.innerRef}>
                        <div className="featureTitle" onClick={overlayOn} {...provided.dragHandleProps} type='task'>{feature.title}</div>
                        <hr/>
                        <div className='taskContainer' id={'task'+feature.id}>
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
                            <TaskForm feature={feature} project={project} />
                        </div>
                    </div>
                )}
            </Draggable>
        </div>
    );
}
 
export default FeatureDetails;