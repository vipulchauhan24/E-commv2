import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    hidden : true,
    cart : []
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                hidden : !state.hidden
            }
        
        case ACTION_TYPES.LOAD_CART_ITEMS:
            return {
                ...state,
                cart : action.payload.cart
            }
            
        case ACTION_TYPES.ADD_TO_CART:
            state.payload.cart.push(action.payload.item)
            return {
                ...state,
                cart : state.payload.cart
            }
        
        default:
            return state;
    }
}

export default userReducer;