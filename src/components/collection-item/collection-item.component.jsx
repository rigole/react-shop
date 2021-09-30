import React from "react";
import CustomButtonComponent from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
    AddButton,
    CollectionItemContainer,
    BackgroundImage,
    NameContainer,
    PriceContainer,
    CollectionFooterContainer
}  from './collection-item.styles';

const CollectionItem = ({ item, addItem}) => {
    const { name, price, imageUrl } = item
    return(
        <CollectionItemContainer>
            <BackgroundImage className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <CustomButtonComponent onClick={() => addItem(item)} inverted>ADD TO CART</CustomButtonComponent>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem)