 import React, {lazy, Suspense} from "react";


import {Route, Switch} from "react-router-dom";


import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { setCurrentUser  } from "./redux/user/user.actions";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";


const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import("./pages/shop/shop.component"))
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"))
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"))



 class App extends React.Component{
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props;


       this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
           //createUserProfileDocument(userAuth)
           if (userAuth){
              const userRef = await createUserProfileDocument(userAuth)

              userRef.onSnapshot(snapshot => {
                  setCurrentUser({
                          id: snapshot.id,
                          ...snapshot.data()
                      })

                  })
          }

               setCurrentUser(userAuth);


     })
       /*this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
           this.setState({ currentUser:user});

          // console.log(user)
       })*/
 }

     componentWillUnmount() {
        this.unsubscribeFromAuth();
     }

    render(){
        return (
            <div>
                <GlobalStyle/>
                <Header />
                <Switch>
                    <ErrorBoundary>
                        <Suspense fallback={<div>...Loading</div>}>
                             <Route exact path='/' component={ HomePage }/>
                             <Route path ='/shop' component={ ShopPage }/>
                            <Route exact path='/checkout' component={CheckoutPage} />
                            <Route path='/signin' component={SignInAndSignUpPage} />

                        </Suspense>
                    </ErrorBoundary>
                </Switch>
            </div>
        );
    }


}

 const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUser
 });

 const mapDispatchToProps = dispatch => ({
     setCurrentUser: user => dispatch(setCurrentUser(user))
 });
export default connect(
    mapStateToProps,
    mapDispatchToProps)
(App);
