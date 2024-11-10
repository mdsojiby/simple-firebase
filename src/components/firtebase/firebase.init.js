// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnvr8wbHWxwCvrb_menHtyPcwHQXzZyLY",
  authDomain: "simple-firebase-2-525f1.firebaseapp.com",
  projectId: "simple-firebase-2-525f1",
  storageBucket: "simple-firebase-2-525f1.firebasestorage.app",
  messagingSenderId: "426576625169",
  appId: "1:426576625169:web:e09603117c3c6516d67bb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth (app)