import React, { createContext, useReducer, useEffect } from 'react';
import { projectReducer } from '../reducers/projectReducer';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const [project, dispath] = useReducer(projectReducer, 
        {title: 'test project', features: [
            {feature: 'feature1', id: 'unique1-1'},
            {feature: 'feature2', id: 'unique1-2'}
        ], id: 'unique1'}
    );
    return (
        <ProjectContext.Provider value={{project, dispath}}>
            { props.children }
        </ProjectContext.Provider>
    );
}
 
export default ProjectContextProvider;