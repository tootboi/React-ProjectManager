import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ProjectContext } from '../contexts/ProjectContext';

const TaskDetails = ({ task, index, feature, project }) => {
    const { dispatch } = useContext(ProjectContext);

    const deleteTask = (e) => {
        dispatch({type: 'DELETE_TASK', ids: {projectId: project.id, featureId: feature.id, taskId: task.id}});
    }
    return(
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div className="tasks" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <span className='dot'></span>{task.content}<span className='deleteBtn' onClick={deleteTask}>&times;</span>
                </div>
            )}
        </Draggable>
    );
}

export default TaskDetails;