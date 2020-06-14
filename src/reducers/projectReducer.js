import { v1 as uuidv1 } from 'uuid';

export const projectReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state, {
                title: action.title,
                features: [],
                totalDone: 0,
                isDone: [],
                id: uuidv1()
            }]
        case 'DELETE_PROJECT':
            return state.filter(project => project.id !== action.id)
        case 'EDIT_PROJECT':
            return state.map(project => {
                if(project.id === action.editProject.id) {
                    return project = {
                        title: action.editProject.title,
                        features: project.features,
                        totalDone: project.totalDone,
                        isDone: project.isDone,
                        id: project.id
                    }
                } else {
                    return project
                }
            })
        case 'ADD_FEATURE':
            return state.map(project => {
                if(project.id === action.addFeature.projectId) {
                    return project = {
                        title: project.title,
                        features: [...project.features, {
                            feature: action.addFeature.feature,
                            id: uuidv1()
                        }],
                        totalDone: project.totalDone,
                        isDone: project.isDone,
                        id: project.id
                    }
                } else {
                    return project
                }
            })
        case 'DELETE_FEATURE':
            return state.map(project => {
                if(project.id === action.deleteFeature.projectId) {
                    return project = {
                        title: project.title,
                        features: project.features.filter(feature => feature.id !== action.deleteFeature.featureId),
                        totalDone: project.totalDone,
                        isDone: project.isDone,
                        id: project.id
                    }
                } else {
                    return project
                }
            })
        case 'EDIT_FEATURE':
            return state.map(project => {
                if(project.id === action.editFeature.projectId) {
                     return project = {
                         title: project.title,
                         features: project.features.map(feature => {
                             if(feature.id === action.editFeature.featureId) {
                                 return feature = {feature: action.editFeature.feature, id: feature.id}
                             } else {
                                 return feature
                             }
                         }),
                         totalDone: project.totalDone,
                         isDone: project.isDone,
                         id: project.id
                     }
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
                        totalDone: project.totalDone + 1,
                        isDone: [...project.isDone, action.ids.featureId],
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
                        totalDone: project.totalDone - 1,
                        isDone: project.isDone.filter(id => id !== action.ids.featureId),
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