import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import app from "../firebase/firebase.config";
import{ createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


 export const AuthContext = createContext();
const auth = getAuth(app);



export default function AuthProvider({children}) {
    const[user,setUser] =useState(null);
    const [loading , setLoading] = useState(true)

    const googleSignIn = (provider) =>{
        setLoading(true);
       return signInWithPopup(auth,provider);
    }


    const createUser=(email,password) =>{
        setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password)
        }
        const signIn=(email,password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password)
        }
    
        const updateUser =(userInfo)=>{
            return updateProfile(auth.currentUser,userInfo)
        }
      
        useEffect(()=>{
          const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            console.log('user observing')
            setUser(currentUser)
            setLoading(false);
          })
          return () => unsubscribe()
          
        },[])
     
      const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
      }
    
       const authInfo={
         createUser, 
         signIn,
         user,
         logOut,
         updateUser,
         loading,
         googleSignIn
      }
    



   
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
