import React, { use, useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

   const {user,logOut}=use(AuthContext)
   const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
   
     useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }

  const handleLogout=()=>{
    logOut()
    .then(()=>{
      toast("successfully logout")
    })
    .catch()
  }
  
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
            <NavLink to="/" className="text-blue-900 font-semibold">Home</NavLink>
        </li>
        <li>
          <NavLink to="/all-courses" className="text-blue-900 font-semibold">All Courses</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className="text-blue-900 font-semibold">Dashboard</NavLink>
        </li>
        <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
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
        <NavLink to="/"  className="text-blue-900 font-semibold">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-courses" className="text-blue-900 font-semibold">All Courses</NavLink>
      </li>
      <li><NavLink  to="/dashboard"  className="text-blue-900 font-semibold">Dashboard</NavLink></li>
      
    </ul>
    </div>
    {
      user&&<div className=' mr-3'>
        <img
                src={user?.photoURL || ""}
                title={user.displayName}
                alt="User Photo"
                className="w-10 h-10 rounded-full border-2 border-purple-500 cursor-pointer"
              />

      </div>
    }
    {
      user? 
      <button onClick={handleLogout} className="btn  bg-linear-to-r from-blue-900 to-blue-400 py-3 mr-1 text-white rounded-full">
        Logout</button>
    :
    <Link to="/login" className="btn  bg-linear-to-r from-blue-900 to-blue-400 py-3 text-white mr-1 rounded-full">Login</Link>
    }
    <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
    
  </div>
</div> 
    
    );
};

export default Navbar;