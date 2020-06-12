import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const FeatureOverlay = ({feature, project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [newFeature, setFeature] = useState(feature.feature);

    const editFeature = (e) => {
        e.preventDefault();
        dispatch({type: 'EDIT_FEATURE', editFeature: {feature: newFeature, featureId: feature.id, projectId: project.id}});
        overlayOff();
    }
    const handleDone = (e) => {
        e.preventDefault();
        document.getElementById(feature.id).classList.toggle('done');
        overlayOff();
    }
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch({type: 'DELETE_FEATURE', deleteFeature: {projectId: project.id, featureId: feature.id}})
    }
    const overlayOff = (e) => {
        document.getElementById('featureOverlay'+feature.id).style.display = 'none';
    }
    return (
        <div className="overlay" style={{opacity: '1'}}>
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <form action="" onSubmit={editFeature} style={{position: 'relative'}}>
                <input type="text" value={newFeature}
                    onChange={(e) => setFeature(e.target.value)} required style={{marginTop: '9%', fontSize: '1.4em'}}/>
                <input type="submit" value="edit feature"/>
            </form>
            <form action="" onSubmit={handleDone} style={{position: 'relative'}}>
                <hr className="overlayHr"/>
                <input type="submit" value="finished"/>
            </form>
            <form action="" onSubmit={handleDelete}>
                <hr className="overlayHr"/>
                <input type="submit" value="delete feature"/>
            </form>
        </div>
    );
}
 
export default FeatureOverlay;