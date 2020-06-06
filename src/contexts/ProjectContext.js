import React, { createContext, useReducer, useEffect } from 'react';
import { projectReducer } from '../reducers/projectReducer';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const [projects, dispath] = useReducer(projectReducer, [
        {title: 'test project', features: [
            {feature: 'feature1', id: 'unique1-1'},
            {feature: 'feature2', id: 'unique1-2'},
            {feature: 'feature3', id: 'unique1-3'},
            {feature: 'feature4', id: 'unique1-4'},
            {feature: 'feature5', id: 'unique1-5'},
            {feature: 'feature6', id: 'unique1-6'},
            {feature: 'feature7', id: 'unique1-7'},
            {feature: 'feature8', id: 'unique1-8'},
            {feature: 'feature9', id: 'unique1-9'},
            {feature: 'feature10', id: 'unique1-10'},
        ], id: 'unique1'},
        {title: 'test project2', features: [
            {feature: 'feature1', id: 'unique2-1'}
        ], id: 'unique2'},
    ]);
    return (
        <ProjectContext.Provider value={{projects, dispath}}>
            { props.children }
        </ProjectContext.Provider>
    );
}
 
export default ProjectContextProvider;