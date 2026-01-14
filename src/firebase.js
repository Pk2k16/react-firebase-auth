import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "keeper-app-1c9ac.firebaseapp.com",
  projectId: "keeper-app-1c9ac",
  storageBucket: "keeper-app-1c9ac.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // This connects to the database you see on your screen

export { db };