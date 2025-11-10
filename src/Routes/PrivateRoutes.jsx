import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoutes = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location=useLocation()

    if (loading===true){
        return  <span className="loading loading-dots loading-xl"></span>
    }
    if (user){
        return children;
    }

    if(!user){
       // console.log("no user")
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    

   
};

export default PrivateRoutes;