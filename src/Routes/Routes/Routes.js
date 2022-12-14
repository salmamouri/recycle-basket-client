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
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFoundPage/NotFound";
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
                path:'/products/:category',
                element:<Products></Products>,
                loader:({params})=>fetch(`https://recycle-basket-server.vercel.app/products/${params.category}`),
            },
            
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'*',
                element:<NotFound></NotFound>
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
            element:<AllSellers></AllSellers>,
            
        },
        {
            path:'/dashboard/allbuyers',
            element:<AllBuyers></AllBuyers>
        },
        {
            path:'/dashboard/payment/:id',
            element:<Payment></Payment>,
            loader:({params})=>fetch(`https://recycle-basket-server.vercel.app/bookings/${params.id}`)
        }
     ]
   }
])