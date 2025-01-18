// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA206voVif3Cgu7Nu4hYW2qfbAmizAkgxo",
  authDomain: "scis-70c7f.firebaseapp.com",
  projectId: "scis-70c7f",
  storageBucket: "scis-70c7f.firebasestorage.app",
  messagingSenderId: "25090892589",
  appId: "1:25090892589:web:4b03a12d374cd4252ae9a4",
  databaseURL: "https://scis-70c7f-default-rtdb.firebaseio.com",
  measurementId: "G-J6M820L9P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);