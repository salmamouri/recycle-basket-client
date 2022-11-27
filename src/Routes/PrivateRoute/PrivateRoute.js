import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider';

export default function PrivateRoute({children}) {
    const {user} = useContext(AuthContext);
  
   
        if(user){
            return children;
        }
    
  
}
