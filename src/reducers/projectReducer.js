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
                        title: action.editProject.title,
                        tasks: project.tasks,
                        features: project.features,
                        featureOrder: project.featureOrder,
                        featuresDone: project.featuresDone,
                        doneFeatures: project.doneFeatures,
                        id: project.id
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
                        title: project.title,
                        tasks: project.tasks,
                        features: {...project.features, [featureId]: {
                            id: featureId,
                            title: action.addFeature.featureTitle,
                            taskIds: [],
                            tasksDone: 0,
                            doneTasks: [],
                        }},
                        featureOrder: [...project.featureOrder, featureId],
                        featuresDone: project.featuresDone,
                        doneFeatures: project.doneFeatures,
                        id: project.id
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
                        title: project.title,
                        tasks: project.tasks,
                        features: project.features,
                        featureOrder: project.featureOrder.filter(id => id !== action.deleteFeature.featureId),
                        featuresDone: project.featuresDone,
                        doneFeatures: project.doneFeatures,
                        id: project.id
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
        case 'INCREMENT_DONE':
            return state.map(project => {
                if(project.id === action.ids.projectId) {
                    return project = {
                        title: project.title,
                        features: project.features,
                        featureOrder: project.featureOrder,
                        featuresDone: project.featuresDone + 1,
                        doneFeatures: [...project.doneFeatures, action.ids.featureId],
                        id: project.id
                    }
                } else {
                    return project
                }
            })
        case 'DECREMENT_DONE':
            return state.map(project => {
                if(project.id === action.ids.projectId) {
                    return project = {
                        title: project.title,
                        features: project.features,
                        featureOrder: project.featureOrder,
                        featuresDone: project.featuresDone - 1,
                        doneFeatures: project.doneFeatures.filter(id => id !== action.ids.featureId),
                        id: project.id
                    }
                } else {
                    return project
                }
            })
        default:
            return state
    }
}