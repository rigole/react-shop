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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //console.log(firestore.doc('users/128rigolux'))4firebase.firestore().enablePersistence()

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const collectionRef = firestore.collection('users')
    const snapShot = await userRef.get()



    if (!snapShot.exists){
        const { displayName, email } =  userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const  newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;