// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5vgv8-4ibIOVL8Pn6d7HVrP51rkyIFiY",
  authDomain: "pr-12-4898c.firebaseapp.com",
  databaseURL: "https://pr-12-4898c-default-rtdb.firebaseio.com",
  projectId: "pr-12-4898c",
  storageBucket: "pr-12-4898c.appspot.com",
  messagingSenderId: "270090072156",
  appId: "1:270090072156:web:a1a2fba4e8b3dd2a503699",
  measurementId: "G-G64C0CLKGM",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
