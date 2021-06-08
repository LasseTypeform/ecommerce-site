// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3bSrDIOMO_IbQrzTi1dI_tHuG8OQKG4Y",
    authDomain: "crwn-db-84989.firebaseapp.com",
    projectId: "crwn-db-84989",
    storageBucket: "crwn-db-84989.appspot.com",
    messagingSenderId: "309022730671",
    appId: "1:309022730671:web:6d7cd1a943675e285a675a",
    measurementId: "G-XZZTHWQNXG"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;
    
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      
      const snapShot = await userRef.get();

    if (!snapShot.exists){

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch (error) {
            console.log('error creating user', error.message);
        }   
    }
    return userRef;
  };



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;