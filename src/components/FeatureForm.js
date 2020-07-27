import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const FeatureForm = ({project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [feature, setFeature] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_FEATURE', addFeature: {featureTitle: feature, projectId: project.id}});
        setFeature('');
    }
    const overlayOff = (e) => {
        document.getElementById('featureForm'+project.id).style.display = 'none';
    }
    return (
        <div className="overlay">
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <div className='projectTitle'>{ project.title }</div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={feature}
                    onChange={(e) => setFeature(e.target.value)} required/>
                <div className="BtnContainer" style={{margin: 0}}>
                    <input type="submit" value="add a feature"/>
                </div>
            </form>
        </div>
    );
}
 
export default FeatureForm;