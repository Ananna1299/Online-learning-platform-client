import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {

   const { createUser,setUser,googleSignIn} = use(AuthContext);
   const [showpassword,setShowPassword]=useState(false)
   //console.log(user)
   const navigate=useNavigate()

   const handleShowpass=(e)=>{
     e.preventDefault()
    setShowPassword(!showpassword)
   }

  //google signup
  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(result=>{
      toast("successfully login")
      navigate("/")
    })
    .catch(error=>
      toast(error.code)
    )

  }




  //signup with email pass
  const handleRegister=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value
    const photo=e.target.photo.value
    const name=e.target.name.value
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)){
      toast("error password")
    return

    }
      
    //console.log(email,password,photo)
    createUser(email,password)
    .then(result=>{
      const userInfo=result.user;
     // console.log(userInfo)
     e.target.reset()
    navigate(`${location.state? location.state: "/"}`)
         
    })
    .catch(error=>toast(error))
   

  }
    
  return (
    <div className="flex justify-center min-h-screen items-center my-3">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center text-purple-800">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

          

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <div className="relative">
              <input
              name="password"
              type={showpassword?"text": "password"} 
              className="input"
              placeholder="Password"
              required
            />
            <button onClick={handleShowpass} className="btn btn-xs absolute top-1.5 right-5">{showpassword?<FaEye />:<FaEyeSlash />}</button>
            </div>

            <button type="submit" className="btn bg-linear-to-r from-blue-900 to-blue-400 
            text-white rounded-full mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-blue-900" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
        {/* Google */}
          <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-gray-400
          mx-5">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
      </div>
    </div>
  );
};

export default Register;
