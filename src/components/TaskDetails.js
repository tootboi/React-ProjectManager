import React, { useContext, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ProjectContext } from '../contexts/ProjectContext';
import TextareaAutosize from 'react-textarea-autosize';

const TaskDetails = ({ task, index, feature, project }) => {
    const { dispatch } = useContext(ProjectContext);
    const [newTask, setNewTask] = useState(task.content);

    const editTask = (e) => {
        setNewTask(e.target.value);
        dispatch({type: 'EDIT_TASK', editTask: {projectId: project.id, taskId: task.id, taskContent: e.target.value}});
    }
    const deleteTask = (e) => {
        dispatch({type: 'DELETE_TASK', ids: {projectId: project.id, featureId: feature.id, taskId: task.id}});
    }
    return(
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div className="tasks" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <span className='dot'></span>
                    <TextareaAutosize className='taskText' minRows={1} maxRows={5} value={newTask} onChange={editTask} />
                    <span className='deleteBtn' onClick={deleteTask}>&times;</span>
                </div>
            )}
        </Draggable>
    );
}

export default TaskDetails;