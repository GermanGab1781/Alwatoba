import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQIK0qBhNGQlzBPvgRUIOwyXNKEtS9kOM",
  authDomain: "alwatoba-store.firebaseapp.com",
  projectId: "alwatoba-store",
  storageBucket: "alwatoba-store.appspot.com",
  messagingSenderId: "686641479835",
  appId: "1:686641479835:web:ec55536d572effc5d1063e",
  measurementId: "G-VKL1KQRVXM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)