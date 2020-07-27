import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const FeatureOverlay = ({feature, project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [newFeature, setFeature] = useState(feature.title);
    const [isDone, setDone] = useState(project.doneFeatures.includes(feature.id));

    const editFeature = (e) => {
        e.preventDefault();
        dispatch({type: 'EDIT_FEATURE', editFeature: {featureTitle: newFeature, featureId: feature.id, projectId: project.id}});
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
    const checkKeys = (e) => {
        if(e.keyCode === 27) {
            overlayOff();
        }
    }
    const overlayOff = (e) => {
        document.getElementById('featureOverlay'+feature.id).style.display = 'none';
    }
    return (
        <div className="overlay" style={{opacity: '1'}} onKeyDown={checkKeys}>
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <form className="finishBtn" action="" onSubmit={handleDone} >
                <input type="submit" value={isDone ? 'actually, not finished' : 'finished'} 
                    style={isDone ? {backgroundColor: 'transparent', color: '#5bbdc0', width: '100%'}:{width: '100%'}}
                />
            </form>
            <textarea name="featureArea" id="" cols="30" rows="10" value={newFeature} onChange={(e) => setFeature(e.target.value)} required style={{marginTop: '3%', fontSize: '1em'}}></textarea>
            <div className='BtnContainer'>
                <form action="" onSubmit={handleDelete}>
                    <input type="submit" value="delete feature" style={{backgroundColor: '#f8f8f8', color: '#74bcaf'}}/>
                </form>
                <form action="" onSubmit={editFeature}>
                    <input type="submit" value="edit feature"/>
                </form>              
            </div>
        </div>
    );
}
 
export default FeatureOverlay;