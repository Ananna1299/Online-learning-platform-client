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
import AboutUs from "../Components/AboutUs";
import MyProfile from "../Components/MyProfile";
import UpdateProfile from "../Components/UpdateProfile";
import DasboardNav from "../Components/DasboardNav";
import Blogs from "../Components/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://online-learning-platform-server-seven.vercel.app/feature-courses"
          ),
      },
      {
        path: "all-courses",
        element: <AllCourses></AllCourses>,
        
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/add-course",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "/dashboard/my-added",
        element: <MyCourses></MyCourses>,
      },
      {
        path: "/dashboard/my-enroll",
        element: <MyEnroll></MyEnroll>,
      },
      {
        path: "/dashboard/profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateCourse></UpdateCourse>,
      },
      {
        path: "/dashboard/updateprofile/:id",
        element: <UpdateProfile></UpdateProfile>,
      },

      {
        path: "/dashboard/homepage",
        element: <DasboardNav></DasboardNav>,
      },
    ],
  },
  {
    path: "course-details/:id",
    element: (
      
        <CourseDetailsLayout></CourseDetailsLayout>
      
    ),
    errorElement: <ErrorPage></ErrorPage>,
  },
   {
    path: "blogs",
    element:<PrivateRoutes>
      <Blogs></Blogs>
      

    </PrivateRoutes> ,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
