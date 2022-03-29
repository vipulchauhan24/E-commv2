import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    hidden : true,
    cart : [],
    quantity : 0
}

const addToCart = (item, cart) =>{
    const id = item.id;
    for(let index = 0; index < cart.length; index++){
        if(`${id}` === `${cart[index].id}`){
            cart[index].quantity++;
            return cart;
        }
    }
    cart.push(item);
    return cart;
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
            state.quantity++;
            return {
                ...state,
                cart : addToCart(action.payload.item, state.cart)
            }

        case ACTION_TYPES.LOAD_CART_QUANTITIES:
            const count = state.cart.reduce((total, item)=>{
                return total + item.quantity;
              },0);

            return {
                ...state,
                cart : state.cart,
                quantity : count
            }
        
        default:
            return state;
    }
}

export default userReducer;