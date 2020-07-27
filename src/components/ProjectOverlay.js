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
    const checkKeys = (e) => {
        if(e.keyCode === 27) {
            overlayOff();
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'DELETE_PROJECT', id: project.id});
    }
    return (
        <div className="overlay" onKeyDown={checkKeys}>
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <input type="text" className='projectTitle' value={title}
                        onChange={(e) => setTitle(e.target.value)} required style={{marginTop: '3.6%', fontSize: '2em', textAlign: 'center', color: '#37bfd9', WebkitTextFillColor: 'transparent', WebkitTextStroke: '.04em #37bfd9'}}/>
            <div className="BtnContainer">
                <form action="" onSubmit={handleSubmit}>
                    <input type="submit" value="delete project" style={{backgroundColor: 'transparent', color: '#5bbdc0'}}/>
                </form>
                <form action="" onSubmit={handleEdit}  style={{position: 'relative'}}>
                    <input type="submit" value="edit"/>
                </form>
            </div>
        </div>
    );
}
 
export default ProjectOverlay;