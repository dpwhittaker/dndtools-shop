// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtru_hyM4EjeEbwQOcYGurWSVYex-Pyho",
    authDomain: "dndtools-98e94.firebaseapp.com",
    projectId: "dndtools-98e94",
    storageBucket: "dndtools-98e94.appspot.com",
    messagingSenderId: "667730800351",
    appId: "1:667730800351:web:c76b7fdb8fb01d1ebf836a",
    measurementId: "G-DN24CJQYY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = firebase.firestore();
const auth = getAuth();
console.log(auth.currentUser);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    // The signed-in user info.
    console.log(result.user);
    return result.user;
};

const signInWithFacebook = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    // The signed-in user info.
    console.log(result.user);
    return result.user;
};

const signOut = async () => {
    return await auth.signOut();
};
  
export {app, auth, signInWithGoogle, signInWithFacebook, signOut};