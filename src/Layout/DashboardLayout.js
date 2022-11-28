import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar'


export default function DashboardLayout() {
  const {user} = useContext(AuthContext);
  const [loggedUser, setLoggedUser]= useState({});
  useEffect(()=>{
    fetch(`https://recycle-basket-server.vercel.app/users/${user.email}`)
    .then(res => res.json())
    .then(data => setLoggedUser(data))
  },[])

  // console.log('love',loggedUser);

  return (
    <div>
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  text-base-content">
           
             
                { loggedUser.role === 'buyer' ?
                  <>
                  <li>
                   <Link to='/dashboard/myorders'>My Orders</Link>
                   </li>
                  </> :
                   loggedUser.role === "seller" ?
                 <>
                    <li>
                   <Link to='/dashboard/addproduct'>Add Products</Link>
                   </li>
                    <li>
                   <Link to='/dashboard/myproducts'>My products</Link>
                   </li>
                   </>
                   :
                   loggedUser.role === "admin" &&
                   <> 
                    <li>
                   <Link to='/dashboard/allsellers'>All Sellers</Link>
                   </li>
                   
                    <li>
                   <Link to='/dashboard/allbuyers'>All Buyers</Link>
                   </li></>
                }
                
               
                
             
          
          </ul>
  
  </div>
</div>
      
    </div>
  )
}
