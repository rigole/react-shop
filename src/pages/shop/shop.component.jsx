import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector} from "reselect";
import PreviewCollectionComponent from "../../components/preview-collection/preview-collection.component";
import {selectCollections} from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (

        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollectionComponent key={id} {...otherCollectionProps} />
                ))}
        </div>
)

const mapStateToProps = createStructuredSelector({
        collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);