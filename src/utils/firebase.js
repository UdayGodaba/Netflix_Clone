// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "moviesandshows-e112b.firebaseapp.com",
  projectId: "moviesandshows-e112b",
  storageBucket: "moviesandshows-e112b.appspot.com",
  messagingSenderId: "676737410344",
  appId: "1:676737410344:web:affc6deac29e3aa1361c1d",
  measurementId: "G-9ZJKF79FHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
