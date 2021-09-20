import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './collection-overview.styles.scss';
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

const CollectionOverviewComponent = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollectionComponent key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverviewComponent)