import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Collections from "../../Pages/Collections/Collections";
import Products from "../../Pages/Collections/Products/Products";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/collections',
                element:<Collections></Collections>,
                
            },
            {
                path:'/products/:title',
                element:<Products></Products>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.title}`),
            },
            
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
           
            
        ]
   },
   {
     path:'/dashboard',
     element:<PrivateRoute>
        <DashboardLayout></DashboardLayout>
     </PrivateRoute>,
     children:[
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'/dashboard/addproduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/dashboard/myproducts',
            element:<MyProducts></MyProducts>
        },
        {
            path:'/dashboard/myorders',
            element:<MyOrders></MyOrders>
        },
        {
            path:'/dashboard/allsellers',
            element:<AllSellers></AllSellers>
        },
        {
            path:'/dashboard/allbuyers',
            element:<AllBuyers></AllBuyers>
        },
     ]
   }
])