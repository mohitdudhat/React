// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBf-0ZuiAR1Hq3yfUW4gkSRCHjozyDwn-g",
  authDomain: "pr---11.firebaseapp.com",
  projectId: "pr---11",
  storageBucket: "pr---11.appspot.com",
  messagingSenderId: "545326606516",
  appId: "1:545326606516:web:e21255057205eac3d78fe1",
  measurementId: "G-ZLLN5VQWFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
