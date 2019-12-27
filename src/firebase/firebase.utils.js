import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC6zIDSI6Z3YrbamVxxyfN1i2Ma8hAjaFM",
  authDomain: "crwn-clothing-db-4e7c4.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-4e7c4.firebaseio.com",
  projectId: "crwn-clothing-db-4e7c4",
  storageBucket: "crwn-clothing-db-4e7c4.appspot.com",
  messagingSenderId: "845524050518",
  appId: "1:845524050518:web:1a2429ae695920444811f7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;