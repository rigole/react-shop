import React from 'react';
import CollectionOverviewComponent from "../../components/collections-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import firebase from "firebase";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

class ShopPage extends React.Component{

    unsubscribeFromSnapshot = null
    componentDidMount() {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot( async snapshot => {
            convertCollectionsSnapshotToMap(snapshot)
        })
    }

    render() {

        const { match } = this.props
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewComponent} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }

}





export default ShopPage