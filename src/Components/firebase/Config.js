// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv_33D0r3YoeBwhFafLSDzpY2wHy-YIGg",
  authDomain: "pf-e-commerce-sofiaviotti.firebaseapp.com",
  projectId: "pf-e-commerce-sofiaviotti",
  storageBucket: "pf-e-commerce-sofiaviotti.appspot.com",
  messagingSenderId: "41759467965",
  appId: "1:41759467965:web:91e8d3cc9221607b9c4ad4",
  measurementId: "G-R3P7QLY33X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);