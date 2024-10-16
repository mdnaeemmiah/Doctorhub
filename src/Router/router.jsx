import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/EorrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Profile from "../Pages/Profile/Profile";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../Layout/Dashboard";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Chart from "../Pages/Dashboard/Chart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/profile',
            element:<Profile></Profile>,
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SingUp></SingUp>
        },
        {
            path:'/appointment',
            element:<Appointment></Appointment>
        },
      ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'user',
                element:<MyAppointment></MyAppointment>,
            },
            {
                path:'chart',
                element:<Chart></Chart>
            },
        ]
    }
  ]);

  export default router