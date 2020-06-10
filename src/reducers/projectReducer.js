import { v1 as uuidv1 } from 'uuid';

export const projectReducer = (state, action) => {
    switch(action.type) {
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
        case 'ADD_PROJECT':
            return [...state, {
                title: action.title,
                features: [],
                id: uuidv1()
            }]
        case 'DELETE_PROJECT':
            return state.filter(project => project.id !== action.id)
        default:
            return state
    }
}