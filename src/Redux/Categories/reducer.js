import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    categories : []
}

const categoryReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ACTION_TYPES.LOAD_CATEGORIES:
        return {
            ...state,
            categories : action.categories
        }
    
        default:
            return state;
    }
}

export default categoryReducer;