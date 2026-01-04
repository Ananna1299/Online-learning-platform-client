import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";
import { IoIosMenu } from 'react-icons/io';
import { toast } from "react-toastify";
import { Link, NavLink, Outlet } from "react-router";
import { FaHome } from "react-icons/fa";
import { MdAddBox, MdOutlineNoteAdd } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const { user, loading,logOut } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }


  
    const handleSignout = () => {
      logOut()
        .then(() => toast('Successfully logged out'))
        .catch(() => {});
    };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full  justify-between bg-base-200 py-2">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost "
          >
            {/* Sidebar toggle icon */}
            <IoIosMenu size={30} />
            
          </label>
          <div className="navbar-end flex gap-7 md:gap-5">
            <div>
              {user && (
              <div className=" flex items-center  gap-1 mr-3">
                <img
                  src={user?.photoURL || ""}
                  alt="User Photo"
                  className="w-10 h-10 rounded-full border-2 border-blue-400 cursor-pointer"
                />
                <span className="text-blue-900 dark:text-blue-400  font-semibold text-sm">
                  {user.displayName}
                </span>
              </div>
            )}
            </div>


            <div>
             <button onClick={handleSignout} className="btn btn-ghost bg-linear-to-r from-blue-900 to-blue-400 py-3 mr-1 text-white rounded-xl text-sm">
                  Sign Out
                </button>
          </div>
          </div>
          
        </nav>

         {/* Page content here */}
    <div className=''>
   <div
  className="w-11/12 mx-auto">
  <Outlet/>
</div>
    
   </div>
       
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
          <li className="is-drawer-close:hidden">
         <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent dark:text-blue-400 italic">
          eLearning
        </Link>
          
        </li>
        
        <li >
          <Link to="/dashboard/homepage" className='hover:bg-gray-300  dark:hover:bg-blue-900'>
              <FaHome size={20} className="text-blue-900 dark:text-white" title='Dashboard'/>
          <p  className="is-drawer-close:hidden text-blue-900 dark:text-white ">HomePage</p>
          </Link>
        </li>



        <li >
          <Link to="/dashboard/profile" className='hover:bg-gray-300  dark:hover:bg-blue-900'>
              
              <CgProfile size={20} className="text-blue-900 dark:text-white" title='Profile' />
          <p  className="is-drawer-close:hidden text-blue-900 dark:text-white ">Profile</p>
          </Link>
        </li>


        <li >
          <Link to="/dashboard/add-course"  className='hover:bg-gray-300  dark:hover:bg-blue-900'>
            <MdOutlineNoteAdd size={20} className="text-blue-900 dark:text-white" title='Add Course'/> 
          <p  className="is-drawer-close:hidden text-blue-900 dark:text-white ">Add Course</p>
          </Link>
        </li>

         <li >
          <Link to="/dashboard/my-added" className='hover:bg-gray-300  dark:hover:bg-blue-900'>
             <MdAddBox size={20} className="text-blue-900 dark:text-white" title='My Added Course'/> 
          <p  className="is-drawer-close:hidden text-blue-900 dark:text-white ">My Added Course</p>
          </Link>
        </li>

        

         <li >
          <Link to="/dashboard/my-enroll"    className='hover:bg-gray-300  dark:hover:bg-blue-900'>
            <TfiWrite size={20} className="text-blue-900 dark:text-white" title='My Enrolled Courses'/>
          <p  className="is-drawer-close:hidden text-blue-900 dark:text-white ">My Enrolled Courses</p>
          </Link>
        </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
