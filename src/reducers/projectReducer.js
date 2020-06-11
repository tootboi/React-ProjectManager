import { v1 as uuidv1 } from 'uuid';

export const projectReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state, {
                title: action.title,
                features: [],
                id: uuidv1()
            }]
        case 'DELETE_PROJECT':
            return state.filter(project => project.id !== action.id)
        case 'ADD_FEATURE':
            return state.map(project => {
                if(project.id === action.addFeature.projectId) {
                    return project = {
                        title: project.title,
                        features: [...project.features, {
                            feature: action.addFeature.feature,
                            id: uuidv1()
                        }],
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
                         })
                     }
                } else {
                    return project
                }
            })
        default:
            return state
    }
}