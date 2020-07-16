import React, { createContext, useReducer, useEffect } from 'react';
import { projectReducer } from '../reducers/projectReducer';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const initialData = [
        {title: 'test project',
        //sub features
        tasks: {
            'unique1-1': {id: 'unique1-1', content: 'Test1'},
            'unique1-2': {id: 'unique1-2', content: 'Test2'},
            'unique1-3': {id: 'unique1-3', content: 'Test3'},
            'unique1-4': {id: 'unique1-4', content: 'Test4'},
        },
        //features
        features: {
            'unique1': {
                id: 'unique1',
                title: 'test feature',
                taskIds: ['unique1-1', 'unique1-2'],
                tasksDone: 0,
                doneTasks: [],
            },
            'unique2': {
                id: 'unique2',
                title: 'test feature2',
                taskIds: ['unique1-3', 'unique1-4'],
                tasksDone: 0,
                doneTasks: [],
            },
        },
        featureOrder: ['unique1', 'unique2'],
        featuresDone: 0, 
        doneFeatures: [],
        id: 'unique0'},
    ]
    const [projects, dispatch] = useReducer(projectReducer, [], () => {
        const localData = localStorage.getItem('projects');
        return localData ? JSON.parse(localData) :
            initialData
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