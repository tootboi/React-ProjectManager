import { v1 as uuidv1 } from 'uuid';

export const projectReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state, {
                title: action.title,
                features: [],
                done: 0,
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
                        done: project.done,
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
                        done: project.done,
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
                        done: project.done,
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
                         done: project.done,
                         id: project.id
                     }
                } else {
                    return project
                }
            })
        case 'INCREMENT_DONE':
            return state.map(project => {
                if(project.id === action.id) {
                    return project = {
                        title: project.title,
                        features: project.features,
                        done: project.done + 1,
                        id: project.id
                    }
                } else {
                    return project
                }
            })
        case 'DECREMENT_DONE':
            return state.map(project => {
                if(project.id === action.id) {
                    return project = {
                        title: project.title,
                        features: project.features,
                        done: project.done - 1,
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