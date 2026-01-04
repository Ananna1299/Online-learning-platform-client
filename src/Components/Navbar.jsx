import React, { use, useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { AiOutlineHome } from 'react-icons/ai';
import { IoBookOutline } from 'react-icons/io5';
import { GoPeople } from 'react-icons/go';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';


const Navbar = () => {

  const {user,logOut}=use(AuthContext)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const handleSignout = () => {
    logOut()
      .then(() => toast('Successfully logged out'))
      .catch(() => {});
  };

  const links = (
    <>
      <li><NavLink to="/" className=" text-blue-900 font-semibold dark:text-blue-400 flex items-center gap-1">
      <AiOutlineHome />
      <span>Home</span>
      </NavLink></li>


      <li><NavLink to="/all-courses" className="text-blue-900 dark:text-blue-400 font-semibold flex items-center gap-1">
      <IoBookOutline />
      <span>All Courses</span></NavLink></li>


      <li><NavLink to="/about" className="text-blue-900 dark:text-blue-400 font-semibold flex items-center gap-1">
      <GoPeople />
      <span>About Us</span></NavLink></li>





      <li><NavLink to="/dashboard/homepage" className="text-blue-900 dark:text-blue-400 font-semibold flex items-center gap-1">
      <MdOutlineDashboardCustomize />
      <span>Dashboard</span></NavLink></li>

      <li><NavLink to="/blogs" className="text-blue-900 dark:text-blue-400 font-semibold flex items-center gap-1">
      <TfiWrite />
      <span>Blogs</span></NavLink></li>
    </>
  );

  return (
    


      <div className="navbar w-10/12 mx-auto px-0  ">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
            {links}
          </ul>
        </div>

        <Link className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent dark:text-blue-400 italic">
          eLearning
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-500">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <button className="btn  bg-linear-to-r from-blue-900 to-blue-400 py-3 mr-1 text-white rounded-xl text-sm">
              Login Info
            </button>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-5 w-56 shadow z-50 space-y-1">
            
            {user && (
              <li className=" text-blue-900 font-semibold text-sm pl-2 dark:text-white">
                {user.displayName || 'User'}
              </li>
            )}

            
             
              
            

            <li className="hover:bg-gray-100 rounded-md dark:hover:bg-blue-900">
              {user ? (
                <button onClick={handleSignout} className="text-blue-900 dark:text-white  font-semibold text-sm">
                  Sign Out
                </button>
              ) : (
                <Link to="/login" className="font-semibold text-blue-900 dark:text-white">
                  Sign In
                </Link>
              )}
            </li>

            {!user && (
              <li className="hover:bg-gray-100 rounded-md dark:hover:bg-blue-900">
                <Link to="/registration" className="font-semibold text-blue-900 dark:text-white">
                  Sign Up
                </Link>
              </li>
            )}
           <div className='pl-2'>
             <input
                type="checkbox"
                className="toggle "
                onChange={(e) => handleTheme(e.target.checked)}
                defaultChecked={localStorage.getItem('theme') === 'dark'}
              />
           </div>
          </ul>
        </div>
      </div>
    </div>
    
    
  );
};

export default Navbar;