import React, { createContext, useReducer, useEffect } from 'react';
import { projectReducer } from '../reducers/projectReducer';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const initialData = [
        {title: 'project title',
        //sub features
        tasks: {
            'unique1-0': {id: 'unique1-0', content: 'Task'},
            'unique1-1': {id: 'unique1-1', content: 'click on "Feature title" for more options'},
            'unique1-2': {id: 'unique1-2', content: 'click on "PROJECT TITLE" for more options'},
            'unique1-3': {id: 'unique1-3', content: 'click on "Task" to edit it'},
            'unique1-4': {id: 'unique1-4', content: 'drag and drop to reorder features and tasks'},
            'unique1-5': {id: 'unique1-5', content: 'your project will be saved to the local storage of the browser. So it won\'t go away even when page is refreshed or browser is restarted.'},
        },
        //features
        features: {
            'unique1': {
                id: 'unique1',
                title: 'Feature title',
                taskIds: ['unique1-0', 'unique1-1', 'unique1-2'],
                tasksDone: 0,
                doneTasks: [],
            },
            'unique2': {
                id: 'unique2',
                title: 'click on "0/2 done" to expand project',
                taskIds: ['unique1-3', 'unique1-4', 'unique1-5'],
                tasksDone: 0,
                doneTasks: [],
            },
        },
        isExpanded: false,
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