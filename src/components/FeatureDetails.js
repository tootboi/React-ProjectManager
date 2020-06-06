import React, { useContext } from 'react';

const FeatureDetails = ({feature}) => {
    return (
        <div className="feature">{feature.feature}</div>
    );
}
 
export default FeatureDetails;