import React from "react";
import { connect } from "react-redux";
import CustomButtonComponent from "../custom-button/custom-button.component";
import {
    CartDropdownContainer,
    CartDropdownButton,
    CartItemsContainer,
    EmptyMessageContainer

} from './cart-dropdown.styles'
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {withRouter} from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";


const CartDropdown = ({ cartItems, history, dispatch  }) => (
  <CartDropdownContainer>
      <CartItemsContainer>
          {
              cartItems.length ?
                  (
                         cartItems.map(cartItem => (
                         <CartItem key={cartItem.id} item={cartItem}/>
                 ))
                  ) : ( <EmptyMessageContainer>Your Cart is empty</EmptyMessageContainer>)


          }
      </CartItemsContainer>
    <CartDropdownButton
        onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector ({
   cartItems:selectCartItems
})
export default withRouter (connect (mapStateToProps) (CartDropdown))