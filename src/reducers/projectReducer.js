import { v1 as uuidv1 } from 'uuid';

export const projectReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state, {
                title: action.title,
                tasks: {},
                features: {},
                featureOrder: [],
                featuresDone: 0,
                doneFeatures: [],
                id: uuidv1()
            }]
        case 'DELETE_PROJECT':
            return state.filter(project => project.id !== action.id)
        case 'EDIT_PROJECT':
            return state.map(project => {
                if(project.id === action.editProject.id) {
                    return project = {
                        ...project,
                        title: action.editProject.title,
                    }
                } else {
                    return project
                }
            })
        case 'ADD_FEATURE':
            const featureId = uuidv1();
            return state.map(project => {
                if(project.id === action.addFeature.projectId) {
                    return project = {
                        ...project,
                        features: {...project.features, [featureId]: {
                            id: featureId,
                            title: action.addFeature.featureTitle,
                            taskIds: [],
                            tasksDone: 0,
                            doneTasks: [],
                        }},
                        featureOrder: [...project.featureOrder, featureId],
                    }
                } else {
                    return project
                }
            })
        case 'DELETE_FEATURE':
            return state.map(project => {
                if(project.id === action.deleteFeature.projectId) {
                    delete project.features[action.deleteFeature.featureId];
                    return project = {
                        ...project,
                        featureOrder: project.featureOrder.filter(id => id !== action.deleteFeature.featureId),
                    };
                } else {
                    return project
                }
            })
        case 'EDIT_FEATURE':
            return state.map(project => {
                if(project.id === action.editFeature.projectId) {
                    project.features[action.editFeature.featureId].title = action.editFeature.featureTitle;
                    return project;
                } else {
                    return project
                }
            })
        case 'REORDER_FEATURE':
            return state.map(project => {
                if(project.id === action.reorder.projectId) {
                    return project = {
                        ...project,
                        featureOrder: action.reorder.newFeatureOrder,
                    }
                } else {
                    return project
                }
            })
        case 'INCREMENT_DONE':
            return state.map(project => {
                if(project.id === action.ids.projectId) {
                    return project = {
                        ...project,
                        featuresDone: project.featuresDone + 1,
                        doneFeatures: [...project.doneFeatures, action.ids.featureId],
                    }
                } else {
                    return project
                }
            })
        case 'DECREMENT_DONE':
            return state.map(project => {
                if(project.id === action.ids.projectId) {
                    return project = {
                        ...project,
                        featuresDone: project.featuresDone - 1,
                        doneFeatures: project.doneFeatures.filter(id => id !== action.ids.featureId),
                    }
                } else {
                    return project
                }
            })
        case 'ADD_TASK':
            const newId = uuidv1();
            return state.map(project => {
                if(project.id === action.addTask.projectId) {
                    project.features[action.addTask.featureId].taskIds.push(newId);
                    project.tasks[newId] = {id: newId, content: action.addTask.task}
                    return project;
                } else {
                    return project
                }
            })
        case 'DELETE_TASK':
            return state.map(project => {
                if(project.id === action.ids.projectId) {
                    delete project.tasks[action.ids.taskId];
                    const taskIndex = project.features[action.ids.featureId].taskIds.indexOf(action.ids.taskId);
                    if (taskIndex > -1) {
                        project.features[action.ids.featureId].taskIds.splice(taskIndex, 1);
                    }
                    return project
                } else {
                    return project
                }
            })
        case 'EDIT_TASK':
            return state.map(project => {
                if(project.id === action.editTask.projectId) {
                    project.tasks[action.editTask.taskId].content = action.editTask.taskContent;
                    return project
                } else {
                    return project
                }
            })
        case 'REORDER_TASK':
            return state.map(project => {
                if(project.id === action.reorder.projectId) {
                    const newFeature = {...project.features[action.reorder.featureId], taskIds: action.reorder.newTaskIds};
                    return project = {
                        ...project,
                        features: {
                            ...project.features,
                            [newFeature.id]: newFeature,
                        }
                    }
                } else {
                    return project
                }
            });
        case 'FINISH_TASK':
            return state.map(project => {
                if(project.id === action.finishTask.projectId) {
                    return project = {
                        ...project,
                        features: {
                            ...project.features,
                            [action.finishTask.featureId]: {
                                ...project.features[action.finishTask.featureId],
                                tasksDone: project.features[action.finishTask.featureId].tasksDone + 1,
                                doneTasks: [...project.features[action.finishTask.featureId].doneTasks, action.finishTask.taskId]
                            }
                        }
                    }
                } else {
                    return project
                }
            });
        case 'UNFINISH_TASK':
            return state.map(project => {
                if(project.id === action.unfinishTask.projectId) {
                    return project = {
                        ...project,
                        features: {
                            ...project.features,
                            [action.unfinishTask.featureId]: {
                                ...project.features[action.unfinishTask.featureId],
                                tasksDone: project.features[action.unfinishTask.featureId].tasksDone - 1,
                                doneTasks: project.features[action.unfinishTask.featureId].doneTasks.filter(id => id !== action.unfinishTask.taskId)
                            }
                        }
                    }
                } else {
                    return project
                }
            });
        default:
            return state
    }
}