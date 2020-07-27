import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const ProjectForm = () => {
    const { dispatch } = useContext(ProjectContext);
    const [project, setProject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_PROJECT', title: project});
        setProject('');
        overlayOff();
    }
    const checkKeys = (e) => {
        if(e.keyCode === 27) {
            overlayOff();
        }
    }
    const overlayOff = (e) => {
        document.getElementById('projectForm').style.display = 'none';
    }
    return (
        <div className="overlay" onKeyDown={checkKeys}>
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <form action="" onSubmit={handleSubmit}>
                <input className='projectFormTitle' type="text" value={project}
                    onChange={(e) => setProject(e.target.value)} required/>
                <div className="BtnContainer" style={{margin: 0}}>
                    <input type="submit" value="add a project"/>
                </div>
            </form>
        </div>
    );
}
 
export default ProjectForm;