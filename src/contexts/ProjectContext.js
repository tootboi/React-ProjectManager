import React, { createContext, useReducer, useEffect } from 'react';
import { projectReducer } from '../reducers/projectReducer';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const [projects, dispatch] = useReducer(projectReducer, [], () => {
        const localData = localStorage.getItem('projects');
        return localData ? JSON.parse(localData) : [
            {title: 'test project', features: [
                {feature: 'feature1', id: 'unique1-1'},
                {feature: 'feature2', id: 'unique1-2'},
                {feature: 'feature3', id: 'unique1-3'},
                {feature: 'feature4', id: 'unique1-4'},
            ], totalDone: 0, isDone: [], id: 'unique1'},
        ]
    });

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);
    return (
        <ProjectContext.Provider value={{projects, dispatch}}>
            { props.children }
        </ProjectContext.Provider>
    );
}
 
export default ProjectContextProvider;