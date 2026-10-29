// import React from 'react';
import {AuthContext} from '../backend/context/Auth';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user){
            return <Navigate to='/admin/login'/>

    }

  return children;
   
  
}

export default RequireAuth