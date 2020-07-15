import React, { useContext } from 'react';

const FeatureDetails = ({feature, project}) => {
    const isDone = () => {
        if(project.isDone.includes(feature.id)) {
            return "featureContainer done";
        } else {
            return "featureContainer";
        }
    }
    const overlayOn = (e) => {
        document.getElementById('featureOverlay'+feature.id).style.display = 'block';
        //these lines focus the cursor to the end of the textarea.
        const textarea = document.getElementById('featureOverlay'+feature.id).children[0].children[2];
        textarea.value = '';
        textarea.value = feature.feature;
        textarea.focus();
    }
    return (
        <div className="feature">
            <div className={isDone()} id={feature.id} onClick={overlayOn}>
                <div className="featureTitle">{feature.feature}</div>
                <hr/>
            </div>
        </div>
    );
}
 
export default FeatureDetails;