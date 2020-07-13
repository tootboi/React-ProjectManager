import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const FeatureOverlay = ({feature, project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [newFeature, setFeature] = useState(feature.feature);
    const [isDone, setDone] = useState(project.isDone.includes(feature.id));

    const editFeature = (e) => {
        e.preventDefault();
        dispatch({type: 'EDIT_FEATURE', editFeature: {feature: newFeature, featureId: feature.id, projectId: project.id}});
        overlayOff();
    }
    const handleDone = (e) => {
        e.preventDefault();
        setDone(!isDone);
        document.getElementById(feature.id).classList.toggle('done');
        isDone ? dispatch({type: 'DECREMENT_DONE', ids: {projectId: project.id, featureId: feature.id}}) : dispatch({type: 'INCREMENT_DONE', ids: {projectId: project.id, featureId: feature.id}});
        overlayOff();
    }
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch({type: 'DELETE_FEATURE', deleteFeature: {projectId: project.id, featureId: feature.id}})
        if(isDone) dispatch({type: 'DECREMENT_DONE', ids: {projectId: project.id, featureId: feature.id}});
    }
    const overlayOff = (e) => {
        document.getElementById('featureOverlay'+feature.id).style.display = 'none';
    }
    return (
        <div className="overlay" style={{opacity: '1'}}>
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <form className="finishBtn" action="" onSubmit={handleDone} >
                <input type="submit" value={isDone ? 'actually, not finished' : 'finished'} 
                    style={isDone ? {backgroundColor: '#74bcaf', color: '#f8f8f8'}:{color: '#74bcaf'}}
                />
            </form>
            <form action="" onSubmit={editFeature} style={{position: 'relative'}}>
                <input type="text" value={newFeature}
                    onChange={(e) => setFeature(e.target.value)} required style={{marginTop: '3%', fontSize: '1.4em'}}/>
                <input type="submit" value="edit feature"/>
            </form>  
            <form action="" onSubmit={handleDelete}>
                <hr className="overlayHr"/>
                <input type="submit" value="delete feature"/>
            </form>
        </div>
    );
}
 
export default FeatureOverlay;