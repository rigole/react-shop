import React  from "react";
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentTitle,
    ContentSubtitle,
    ContentContainer
    } from './menu-item.styles';

import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (

    <MenuItemContainer className = { `${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer className='background-image' style={
            {backgroundImage: `url(${imageUrl})`}
        }/>
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()} </ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);
export default withRouter(MenuItem);