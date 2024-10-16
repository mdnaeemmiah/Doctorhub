// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6KLzTwgqitp9x29veFX5QfEfWac-Ki64",
  authDomain: "user-email-password-24983.firebaseapp.com",
  projectId: "user-email-password-24983",
  storageBucket: "user-email-password-24983.appspot.com",
  messagingSenderId: "327949590242",
  appId: "1:327949590242:web:381036ccb01c215c1c88bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 