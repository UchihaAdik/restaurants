// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyD96kmVh6wztJlLwFhDvxuFnmadVqH2Qqw",
  authDomain: "menupizza-7c534.firebaseapp.com",
  projectId: "menupizza-7c534",
  storageBucket: "menupizza-7c534.appspot.com",
  messagingSenderId: "645592161071",
  appId: "1:645592161071:web:827f0aa7babf0225a15fda",
  measurementId: "G-FLH0EDCTBB",
    databaseUrl: "https://menupizza-7c534-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
export default database 