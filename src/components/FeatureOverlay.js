import React, { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const FeatureOverlay = ({feature, project}) => {
    const { dispatch } = useContext(ProjectContext);
    const [newFeature, setFeature] = useState(feature.feature);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'EDIT_FEATURE', editFeature: {feature: newFeature, featureId: feature.id, projectId: project.id}});
        overlayOff();
    }
    const overlayOff = (e) => {
        document.getElementById('featureOverlay'+feature.id).style.display = 'none';
    }
    return (
        <div className="overlay">
            <div className="closeBtn" onClick={overlayOff}>&otimes;</div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={newFeature}
                    onChange={(e) => setFeature(e.target.value)} required style={{fontSize: '1.4em', marginBottom: '1vh'}}/>
                <input type="submit" value="edit feature"/>
            </form>
        </div>
    );
}
 
export default FeatureOverlay;