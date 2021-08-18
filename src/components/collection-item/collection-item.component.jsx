import React from "react";
import './collection-item.styles.scss';
import CustomButtonComponent from "../custom-button/custom-button.component";

const CollectionItem = ({ id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButtonComponent>ADD TO CART</CustomButtonComponent>
    </div>
)

export default CollectionItem