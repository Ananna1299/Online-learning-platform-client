import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllCourses from "../Components/AllCourses";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import CourseDetailsLayout from "../Layouts/CourseDetailsLayout";






export const router=createBrowserRouter(
    [
        {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>,
                loader: () => fetch('http://localhost:3000/feature-courses')

            },
            {
                path:"all-courses",
                element:<AllCourses></AllCourses>,
                loader: () => fetch('http://localhost:3000/courses')
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"registration",
                element:<Register></Register>
            },
            
            
            

        ]
        },
        {
        path:"dashboard",
        element:<PrivateRoutes>
            <Dashboard></Dashboard>
        </PrivateRoutes>
        
      
    },
    {
        path:"course-details/:id",
        element:<PrivateRoutes>
            <CourseDetailsLayout></CourseDetailsLayout>
           
        </PrivateRoutes>
    }
    ]
)