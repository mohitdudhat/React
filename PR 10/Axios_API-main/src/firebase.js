// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTUEBAh6dDGvX8_pIGvfTIeFjjin7nDbY",
  authDomain: "api-with-axios.firebaseapp.com",
  projectId: "api-with-axios",
  storageBucket: "api-with-axios.appspot.com",
  messagingSenderId: "1098457719667",
  appId: "1:1098457719667:web:9c010a3c41281b25829b06",
  measurementId: "G-E8XB6NPH0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 