import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDx5EitMlKmpOr8TpOOlfR6iWFhMbpHXVg",
  authDomain: "soa-fest-c043f.firebaseapp.com",
  projectId: "soa-fest-c043f",
  storageBucket: "soa-fest-c043f.appspot.com",
  messagingSenderId: "747016413597",
  appId: "1:747016413597:web:a6c4c8caea5509833b8f74",
  measurementId: "G-ETJ7JPYWB9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider(app);
// export const storage = getStorage(app);
