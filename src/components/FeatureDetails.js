import React, { useContext } from 'react';
import FeatureOverlay from './FeatureOverlay';

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
        // this line adds focus text input field of project overlay. There is def a better way to do this.
        document.getElementById('featureOverlay'+feature.id).children[0].children[1].children[0].focus();
    }
    return (
        <div className="feature">
            <div className="overlayContainer">
                <div id={'featureOverlay'+feature.id}>
                    <FeatureOverlay feature={feature} project={project}/>
                </div>
            </div>
            <div className={isDone()} id={feature.id} onClick={overlayOn}>
                <div className="featureTitle">{feature.feature}</div>
                <hr/>
            </div>
        </div>
    );
}
 
export default FeatureDetails;