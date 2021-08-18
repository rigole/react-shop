import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer"
import CartReducer from "./cart/cart.reducer"
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});

