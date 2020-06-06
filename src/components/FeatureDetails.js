import React, { useContext } from 'react';

const FeatureDetails = ({feature}) => {
    return (
        <li>
            <div className="feature"> {feature.feature} </div>
        </li>
    );
}
 
export default FeatureDetails;