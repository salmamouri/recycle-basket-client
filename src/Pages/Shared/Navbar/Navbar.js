import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

export default function Navbar() {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <li className="hover:bg-primary hover:text-primary-content">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-primary hover:text-primary-content">
        <Link to="/blogs">Blogs</Link>
      </li>
      {
        user?.uid?
      <>
         <li className="hover:bg-primary hover:text-primary-content">
       <Link to="/dashboard">Dashboard</Link>
     </li>
        
        <li className="hover:bg-primary hover:text-primary-content">
       <Link to='/'> <button onClick={handleLogOut} className="btn btn-primary text-secondary" >Logout</button></Link>
      </li>
      
      
      </>
      :
      <li className="hover:bg-primary hover:text-primary-content">
      <Link to="/login">Login</Link>
    </li>
   
      }
     
    </>
  );
  return (
    <div>
      <div className="navbar mb-12 bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className="">
            <div className=" w-48  pl-5 mx-4">
              <img src="https://i.ibb.co/6n6yBMW/logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden px-20 py-5 lg:flex ">
          <ul className="menu menu-horizontal text-dark font-semibold p-0 ">
            {menuItems}
          </ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
}
