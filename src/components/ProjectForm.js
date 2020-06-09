import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const ProjectForm = ({project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [feature, setFeature] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_FEATURE', addFeature: {feature: feature, projectId: project.id}});
        setFeature('');
    }
    const overlayOff = (e) => {
        document.getElementById('overlay'+project.id).style.display = 'none';
    }
    return (
        <div className="featureForm">
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <div className='projectTitle'>{ project.title }</div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={feature}
                    onChange={(e) => setFeature(e.target.value)} required/>
                <input type="submit" value="add a feature"/>
            </form>
        </div>
    );
}
 
export default ProjectForm;