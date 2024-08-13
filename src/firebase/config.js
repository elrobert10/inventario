// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIh1ScadAhDG8XqsXu0yIhgkmw2xKlaZA",
  authDomain: "inventario-4e747.firebaseapp.com",
  projectId: "inventario-4e747",
  storageBucket: "inventario-4e747.appspot.com",
  messagingSenderId: "728804644114",
  appId: "1:728804644114:web:03d8d69284bb73786f0fcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)