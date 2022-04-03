import { ACTION_TYPES } from "./actionTypes";

const initialState = {
    hidden : true,
    cart : [],
    quantity : 0,
    totalPrice : 0
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

const decreaseQuantity = (item, cart) =>{
    const id = item.id;
    for(let index = 0; index < cart.length; index++){
        if(`${id}` === `${cart[index].id}`){
            cart[index].quantity--;
            if(cart[index].quantity === 0){
                cart.splice(index, 1);
            }
            return cart;
        }
    }
    return cart;
}

const removeItem = (item, cart) =>{
    const id = item.id;
    for(let index = 0; index < cart.length; index++){
        if(`${id}` === `${cart[index].id}`){
            cart.splice(index, 1);
            return cart;
        }
    }
    return cart;
}

const calcTotalPrice = (cart) => {
    const totalPrice = cart.reduce((total, item)=>{
        return total + (item.quantity * item.price);
    },0);
    return totalPrice 
}
const calcTotalQuantities = (cart) => {
    const count = cart.reduce((total, item)=>{
        return total + item.quantity;
      },0);
    return count 
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
                ...state
            }
            
        case ACTION_TYPES.ADD_TO_CART:
            return {
                ...state,
                cart : addToCart(action.payload.item, state.cart),
                totalPrice : calcTotalPrice(state.cart),
                quantity : calcTotalQuantities(state.cart)
            }

        case ACTION_TYPES.DECREASE_QUANTITY:
                return {
                    ...state,
                    cart : decreaseQuantity(action.payload.item, state.cart),
                    totalPrice : calcTotalPrice(state.cart),
                    quantity : calcTotalQuantities(state.cart)
                }

        case ACTION_TYPES.REMOVE_ITEM:
            return {
                ...state,
                cart : removeItem(action.payload.item, state.cart),
                totalPrice : calcTotalPrice(state.cart),
                quantity : calcTotalQuantities(state.cart)
            }

        case ACTION_TYPES.LOAD_CART_QUANTITIES:
            return {
                ...state,
                cart : state.cart,
                quantity : calcTotalQuantities(state.cart)
            }

        case ACTION_TYPES.TOTAL_PRICE:
                return {
                    ...state,
                    totalPrice : calcTotalPrice(state.cart)
                }
        
        default:
            return state;
    }
}

export default userReducer;