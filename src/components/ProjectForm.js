import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const ProjectForm = () => {
    const { dispatch } = useContext(ProjectContext);
    const [project, setProject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_PROJECT', title: project});
        setProject('');
        document.getElementById('projectForm').style.display = 'none';
    }
    const overlayOff = (e) => {
        document.getElementById('projectForm').style.display = 'none';
    }
    return (
        <div className="overlay">
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={project}
                    onChange={(e) => setProject(e.target.value)} required/>
                <input type="submit" value="add a project"/>
            </form>
        </div>
    );
}
 
export default ProjectForm;