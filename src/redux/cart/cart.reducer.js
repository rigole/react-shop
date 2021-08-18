import CartActionTypes from './cart.type'

const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '':
        return{
            ...state,
            hidden: !state.hidden
        }
        default:
            return state;
    }
}