import React,{useEffect} from 'react';
import { Navigate} from 'react-router-dom';
import { useAuthState } from "../firebase";

const AlreadyLogin = ({ children }) => {
    const {isAuthenticated} = useAuthState()
    return !isAuthenticated ? children : <Navigate to="/Admin"/>
}

export default AlreadyLogin