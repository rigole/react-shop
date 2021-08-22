import React from "react";
import { connect } from "react-redux";
import CustomButtonComponent from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {withRouter} from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";


const CartDropdown = ({ cartItems, history, dispatch  }) => (
  <div className='cart-dropdown'>
      <div className='cart-items'>
          {
              cartItems.length ?
                  (
                         cartItems.map(cartItem => (
                         <CartItem key={cartItem.id} item={cartItem}/>
                 ))
              ) : ( <span className='empty-message'>Your Cart is empty</span>)


          }
      </div>
    <CustomButtonComponent
        onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT
    </CustomButtonComponent>
  </div>
)

const mapStateToProps = createStructuredSelector ({
   cartItems:selectCartItems
})
export default withRouter (connect (mapStateToProps) (CartDropdown))