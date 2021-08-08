import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBtkqjZ2-hWcTeb4Ao3YAJNVgg1KTgcQLI",
    authDomain: "react-shop-e530d.firebaseapp.com",
    projectId: "react-shop-e530d",
    storageBucket: "react-shop-e530d.appspot.com",
    messagingSenderId: "831191601785",
    appId: "" +
        "1:831191601785:web:048c2a1071134a412ffaa8"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;