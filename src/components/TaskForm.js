import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const TaskForm = ({feature, project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TASK', addTask: {featureId: feature.id, projectId: project.id, task: newTask}});
        setNewTask('');
    }

    return (
        <div className='taskForm'>
            <form onSubmit={addTask}>
                <input type="text" placeholder='Add a task' onChange={(e) => setNewTask(e.target.value)} value={newTask} required/>
            </form>
        </div>
    );
}
 
export default TaskForm;