// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVNROubz-Zj8_lgMSROURpIOlo9DIibL8",
  authDomain: "recruitment-app-f2700.firebaseapp.com",
  projectId: "recruitment-app-f2700",
  storageBucket: "recruitment-app-f2700.appspot.com",
  messagingSenderId: "402501554828",
  appId: "1:402501554828:web:e978abe8e6909d3f4761a9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app);

export {auth,provider,db}