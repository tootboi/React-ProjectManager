import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const ProjectOverlay = ({project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [title, setTitle] = useState(project.title);

    const overlayOff = (e) => {
        document.getElementById('projectOverlay'+project.id).style.display = 'none';
    }
    const handleEdit = (e) => {
        e.preventDefault();
        dispatch({type: 'EDIT_PROJECT', editProject: {title: title, id: project.id}});
        overlayOff();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'DELETE_PROJECT', id: project.id});
    }
    return (
        <div className="overlay">
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <form action="" onSubmit={handleEdit}  style={{position: 'relative'}}>
                <input type="text" className='projectTitle' value={title}
                    onChange={(e) => setTitle(e.target.value)} required style={{marginTop: '3.6%', fontSize: '2em', textAlign: 'center', color: '#37bfd9', WebkitTextFillColor: 'transparent', WebkitTextStroke: '.04em #37bfd9', cursor: 'auto'}}/>
                <input type="submit" value="edit"/>
            </form>
            <form action="" onSubmit={handleSubmit}>
                <hr className="overlayHr"/>
                <input type="submit" value="delete project"/>
            </form>
        </div>
    );
}
 
export default ProjectOverlay;