import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllCourses from "../Components/AllCourses";
import Dashboard from "../Layouts/Dashboard";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import CourseDetailsLayout from "../Layouts/CourseDetailsLayout";
import AddCourse from "../Components/AddCourse";
import MyCourses from "../Components/MyCourses";
import MyEnroll from "../Components/MyEnroll";
import UpdateCourse from "../Components/UpdateCourse";
import ErrorPage from "../Pages/ErrorPage";






export const router=createBrowserRouter(
    [
        {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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
        </PrivateRoutes>,
         errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/dashboard/add-course",
                element:<AddCourse></AddCourse>,
                

            },
            {
                path:"/dashboard/my-added",
                element:<MyCourses></MyCourses>,
                

            },
            {
                path:"/dashboard/my-enroll",
                element:<MyEnroll></MyEnroll>,
                

            },
            {
                path:"/dashboard/update/:id",
                element:<UpdateCourse></UpdateCourse>
                

            },

            

        ]

        
      
    },
    {
        path:"course-details/:id",
        element:<PrivateRoutes>
            <CourseDetailsLayout></CourseDetailsLayout>
           
        </PrivateRoutes>,
         errorElement:<ErrorPage></ErrorPage>
    }
    ]
)