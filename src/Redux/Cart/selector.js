import { createSelector } from 'reselect'

const  getCartList = (state) => state.cart;

export const cartSelectors = createSelector(
    [getCartList],
    (cart) => cart
)