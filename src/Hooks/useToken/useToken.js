import React, { useEffect, useState } from 'react'

export default function useToken(email) {
    const [token,setToken ] = useState('');

    useEffect(()=>{
  if(email){
    fetch(`https://recycle-basket-server.vercel.app/jwt?email=${email}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        setToken(data.accessToken);
      }
    });
  }
       },[email])
  return [token];
}
