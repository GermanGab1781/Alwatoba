import React,{useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from "../firebase";



const PrivateRoute = ({ children }) => {
    const { isAuthenticated} = useAuthState()
    return isAuthenticated ? children : <Navigate to="/"/>
}

export default PrivateRoute;