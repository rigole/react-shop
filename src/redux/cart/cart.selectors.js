import { createSelector } from "reselect";

const selectCar = state => state.cart;

export const selectCartItems = createSelector(
    [selectCar],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity,cartItems)=> accumulatedQuantity + cartItems.quantity, 0)
)