import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
    PreviewContainer,
    TitleContainer,
    CollectionPreviewContainer
    }
    from './preview-collection.styles';


const PreviewCollectionComponent = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>{ title.toUpperCase() }</TitleContainer>
        <PreviewContainer>

            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item ={item}/>
                    ))}

        </PreviewContainer>
    </CollectionPreviewContainer>
)
export default PreviewCollectionComponent