 import React, {lazy, Suspense} from "react";


import {Route, Switch} from "react-router-dom";

//import ShopPage from "./pages/shop/shop.component"
//import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
//import CheckoutPage from "./pages/checkout/checkout.component";


import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { setCurrentUser  } from "./redux/user/user.actions";

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
                        <Suspense fallback={<div>...Loading</div>}>
                             <Route exact path='/' component={ HomePage }/>
                             <Route path ='/shop' component={ ShopPage }/>
                             <Route path='/signin' component={SignInAndSignUpPage} />
                            <Route exact path='/checkout' component={CheckoutPage} />
                    </Suspense>
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
