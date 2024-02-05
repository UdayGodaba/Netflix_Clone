// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBebKp8Tu160RtFxNXSj9doWaSB9K4q3SI",
  authDomain: "netflix-clone-3afb2.firebaseapp.com",
  projectId: "netflix-clone-3afb2",
  storageBucket: "netflix-clone-3afb2.appspot.com",
  messagingSenderId: "790163378605",
  appId: "1:790163378605:web:3067324f4f716a3317d124",
  measurementId: "G-7NWMT2W9R3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
