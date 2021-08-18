import React from "react";
import CustomButtonComponent from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'

const CartDropdown = () => (
  <div className='cart-dropdown'>
      <div className='cart-items'/>
    <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
  </div>
)

export default CartDropdown