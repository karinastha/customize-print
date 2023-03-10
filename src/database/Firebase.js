// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXZL8pi04LjLG1bP0AZuDTbC3dV1SNGJ4",
  authDomain: "fitme-52288.firebaseapp.com",
  projectId: "fitme-52288",
  storageBucket: "fitme-52288.appspot.com",
  messagingSenderId: "152963975662",
  appId: "1:152963975662:web:c80dfc071b2f824b75a6ff",
  measurementId: "G-B13J0C0YZG"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();

const auth = firebase.auth();

export {db ,auth};