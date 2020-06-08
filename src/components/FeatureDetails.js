import React, { useContext } from 'react';

const FeatureDetails = ({feature}) => {
    return (
        <div className="feature">
            <div className="featureContainer">
                <div className="featureTitle">{feature.feature}</div>
                <hr/>
            </div>
        </div>
    );
}
 
export default FeatureDetails;