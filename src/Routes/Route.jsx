import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllCourses from "../Components/AllCourses";
import Dashboard from "../Layouts/Dashboard";





export const router=createBrowserRouter(
    [
        {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"all-courses",
                element:<AllCourses></AllCourses>
            }
            
            

        ]
        },
        {
        path:"dashboard",
        element:<Dashboard></Dashboard>
      
    },
    ]
)