import React from 'react';
import TaskDetails from './TaskDetails';
import { Droppable } from 'react-beautiful-dnd';
import TaskForm from './TaskForm';

const FeatureDetails = ({feature, project}) => {
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
            <div className={isDone()} id={feature.id}>
                <div className="featureTitle" onClick={overlayOn}>{feature.title}</div>
                <hr/>
                <div className='taskContainer' id={'task'+feature.id}>
                    <Droppable droppableId={feature.id}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {feature.taskIds.map((taskId, index) => {
                                    return(<TaskDetails key={taskId} task={project.tasks[taskId]} index={index} />);
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <TaskForm feature={feature} project={project} />
                </div>
            </div>
        </div>
    );
}
 
export default FeatureDetails;