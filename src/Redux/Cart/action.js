import {ACTION_TYPES} from './actionTypes';

export const toggleCart = () => ({type : ACTION_TYPES.TOGGLE_CART});
export const loadCart = (userID, cart) => ({type : ACTION_TYPES.LOAD_CART_ITEMS, payload : { userID : userID, cart : cart}});
export const addToCart = (userID, cart, item) => ({type : ACTION_TYPES.ADD_TO_CART, payload : { userID : userID, cart : cart, item : item}});