// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmBKbG_xG3GHCQqAHkQvcY3fuIt8C-Exk",
  authDomain: "mannat-gifts.firebaseapp.com",
  projectId: "mannat-gifts",
  storageBucket: "mannat-gifts.appspot.com",
  messagingSenderId: "283830515424",
  appId: "1:283830515424:web:a94f06d61b1cc109588285",
  measurementId: "G-RTRH8V6CPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)