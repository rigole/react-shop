import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionsOverviewContainer } from "./collection-overview.styles";

import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

const CollectionOverviewComponent = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollectionComponent key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverviewComponent)