import React from 'react';
import CollectionOverviewComponent from "../../components/collections-overview/collection-overview.component";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) =>  {
        return(
        <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionOverviewComponent} />
        </div>

)}


export default ShopPage