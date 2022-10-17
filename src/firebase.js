import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { createContext, useState, useEffect,useContext } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_DATABASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DATABASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_DATABASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_DATABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_DATABASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_DATABASE_ID,
  measurementId: process.env.REACT_APP_FIREBASE_DATABASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user,setUser] = useState()
  const [error,setError] = useState()
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(getAuth(),setUser,setError)
    return ()=> unsubscribe
  },[])

  return <AuthContext.Provider value={{ user,error }} {...props} />
}

export const useAuthState = () =>{
  const auth = useContext(AuthContext)
  return {...auth, isAuthenticated: auth.user != null }
}