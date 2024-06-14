// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC15Sb7fqwpX4_RW-AQolwR0wMcBLuknAw",
  authDomain: "chatappver2-198ab.firebaseapp.com",
  projectId: "chatappver2-198ab",
  storageBucket: "chatappver2-198ab.appspot.com",
  messagingSenderId: "927593222754",
  appId: "1:927593222754:web:5ab0cc9523460a3570f73b",
  measurementId: "G-TM2F4HB41T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const signInGoole = async () => {
  await signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
