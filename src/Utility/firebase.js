// import {initializeApp} from "firebase/compat/app";
// import {getAuth} from 'firebase/auth';
// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWdCzRFc6vywsnd2nxrytLQSxqyZQw1Vs",
  authDomain: "clone-9a529.firebaseapp.com",
  projectId: "clone-9a529",
  storageBucket: "clone-9a529.appspot.com",
  messagingSenderId: "697493037013",
  appId: "1:697493037013:web:8eaca83c2871f8d9b7a75c"
};

// Initialize Firebase auth
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export const db = app.firestore()


