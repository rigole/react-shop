import React from "react";
import {ItemCountContainer, ShoppingIconsStyle, CartContainer} from './cart-icon.styles'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIconComponent = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIconsStyle />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount:  selectCartItemsCount
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(CartIconComponent);