// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA59CBsD8Ox68U5hF98HKCBN0BfOAMScy8",
  authDomain: "anyonepray.firebaseapp.com",
  projectId: "anyonepray",
  storageBucket: "anyonepray.appspot.com",
  messagingSenderId: "233006237762",
  appId: "1:233006237762:web:8b69f2155d9249079a45db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);