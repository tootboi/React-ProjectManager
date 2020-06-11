import React, { useContext } from 'react';
import FeatureOverlay from './FeatureOverlay';

const FeatureDetails = ({feature, project}) => {
    const overlayOn = (e) => {
        document.getElementById('featureOverlay'+feature.id).style.display = 'block';
    }
    return (
        <div className="feature">
            <div className="overlayContainer">
                <div id={'featureOverlay'+feature.id}>
                    <FeatureOverlay feature={feature} project={project}/>
                </div>
            </div>
            <div className="featureContainer" onClick={overlayOn}>
                <div className="featureTitle">{feature.feature}</div>
                <hr/>
            </div>
        </div>
    );
}
 
export default FeatureDetails;