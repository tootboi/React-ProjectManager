import React, { useContext } from 'react';
import FeatureDetails from './FeatureDetails';

const FeatureList = ({features}) => {
    return (
        <div className="featureList">
            <ul>
                {features.map(feature => {
                    return (<FeatureDetails feature={feature} key={feature.id} />)
                })}
            </ul>
        </div>
    );
}
 
export default FeatureList;