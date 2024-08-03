// import Cookies from 'js-cookie'
// import {Navigate, Routes, Route} from 'react-router-dom'
// const ProtectedRoute =props=>{
//     const jwtToken=Cookies.get('jwt_token')
//     console.log("PROTECT", jwtToken)
//     if(jwtToken===undefined){
//         return <Navigate to="/"/>
//     }
//     else{
//         return <Routes><Route {...props}/></Routes>
//     }
// }
// export default ProtectedRoute

import Cookies from 'js-cookie'
import React from 'react';
import { Navigate } from 'react-router-dom';

// A function to check if the user is authenticated
const useAuth = () => {
  // Replace this with your actual authentication logic
    const jwtToken=Cookies.get('jwt_token')
    console.log("PROTECT", jwtToken)
    if(jwtToken===undefined){
        return false
    }
    else{
        return true
    }
};

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth();
  
  // Redirect to login if not authenticated, otherwise render the element
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
