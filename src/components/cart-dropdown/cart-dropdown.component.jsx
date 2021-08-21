import React from "react";
import { connect } from "react-redux";
import CustomButtonComponent from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";


const CartDropdown = ({ cartItems }) => (
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
    <CustomButtonComponent>GO TO CHECKOUT</CustomButtonComponent>
  </div>
)

const mapStateToProps = createStructuredSelector ({
   cartItems:selectCartItems
})
export default connect(mapStateToProps) (CartDropdown)