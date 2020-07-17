import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskDetails = ({ task, index }) => {
    return(
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div className="tasks" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {task.content}
                </div>
            )}
        </Draggable>
    );
}

export default TaskDetails;