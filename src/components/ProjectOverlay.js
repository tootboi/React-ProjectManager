import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const ProjectOverlay = ({project}) => {
    const { dispatch } = useContext(ProjectContext);

    const overlayOff = (e) => {
        document.getElementById('projectOverlay'+project.id).style.display = 'none';
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'DELETE_PROJECT', id: project.id});
    }
    return (
        <div className="overlay">
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <div className='projectTitle'>{ project.title }</div>
            <form action="" onSubmit={handleSubmit}>
                <hr className="overlayHr"/>
                <input type="submit" value="delete project"/>
            </form>
        </div>
    );
}
 
export default ProjectOverlay;