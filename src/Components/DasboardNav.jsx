import React from 'react';
import { Link, NavLink } from 'react-router';

const DasboardNav = () => {
    return (
               
<div className="navbar px-8 bg-base-200 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
            <NavLink to="/dashboard/add-course" className="text-blue-900 font-semibold">Add Course</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/my-added" className="text-blue-900 font-semibold">My Added Course</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/my-enroll" className="text-blue-900 font-semibold">My Enroll Course</NavLink>
        </li>
      </ul>
    </div>
    <div className='flex items-center'>
        
        <a className="btn btn-ghost text-2xl bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">eLearning</a>
    </div>
  </div>
  
  <div className="navbar-end">
    <div className='hidden lg:flex'>
        <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to="/dashboard/add-course"  className="text-blue-900 font-semibold">Add Course</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-added" className="text-blue-900 font-semibold">My Added Course</NavLink>
      </li>
      <li><NavLink  to="/dashboard/my-enroll"  className="text-blue-900 font-semibold">My Enroll Course</NavLink></li>
    </ul>
    </div>
    
    
    <Link to="/" className="btn  bg-linear-to-r from-blue-900 to-blue-400 py-3 text-white rounded-full">Home</Link>
    
    
  </div>
</div> 
    );
};

export default DasboardNav;