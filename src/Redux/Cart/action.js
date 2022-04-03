import {ACTION_TYPES} from './actionTypes';

export const toggleCart = () => ({type : ACTION_TYPES.TOGGLE_CART});
export const loadCart = (userID) => ({type : ACTION_TYPES.LOAD_CART_ITEMS, payload : { userID : userID}});
export const addToCart = (userID, cart, item) => ({type : ACTION_TYPES.ADD_TO_CART, payload : { userID : userID, cart : cart, item : item}});
export const decreaseQuantity = (userID, cart, item) => ({type : ACTION_TYPES.DECREASE_QUANTITY, payload : { userID : userID, cart : cart, item : item}});
export const loadCartQuantity = (userID, cart) => ({type : ACTION_TYPES.LOAD_CART_QUANTITIES, payload : { userID : userID, cart : cart}});
export const removeItem = (userID, cart, item) => ({type : ACTION_TYPES.REMOVE_ITEM, payload : { userID : userID, cart : cart, item : item}});
export const getTotalPrice = (userID, cart) => ({type: ACTION_TYPES.TOTAL_PRICE, payload : {userID : userID, cart : cart}})