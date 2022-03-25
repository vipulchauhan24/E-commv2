import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    hidden : true
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_CART:
        return {
            ...state,
            hidden : !state.hidden
        }
    
        default:
            return state;
    }
}

export default userReducer;