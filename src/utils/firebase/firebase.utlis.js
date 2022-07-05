import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  }  from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  } from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyAboCkl2MxF8zf0Qi8MXbPViu_CjhtA1ks",
    authDomain: "crwn-clothing-db-10404.firebaseapp.com",
    projectId: "crwn-clothing-db-10404",
    storageBucket: "crwn-clothing-db-10404.appspot.com",
    messagingSenderId: "490525288908",
    appId: "1:490525288908:web:24cac54e19f3b73fc71569"
  };  
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    propmt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
          console.log(error.message);
      }
    }


    return userDocRef;
  }
