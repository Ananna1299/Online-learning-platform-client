import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import img from "../../assets/n-removebg-preview.png"

const Login = () => {

  const {googleSignIn, loginUser,}=use(AuthContext)
  const location=useLocation()
   //console.log(location)
  const navigate=useNavigate()
  const [showpassword,setShowPassword]=useState(false)
  const emailRef=useRef()

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


   const handleShowpass=(e)=>{
     e.preventDefault()
    setShowPassword(!showpassword)
   }


   const handleCredentialLogin = () => {
  setEmail("roshi@gmail.com");
  setPassword("Abc123#");
};





//for google login
const handleGoogleSignIn=()=>{
  googleSignIn()
  .then(result=>{
   // console.log(result)
    toast("Successfully Login")
     navigate(`${location.state? location.state: "/"}`)
  })
  .catch(err=>toast(err.code))


}





 //for email/pass login
  const handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value
    //console.log(email,password)
    loginUser(email,password)
    .then(result=>{
      //console.log(result.user)
      toast("successfully login")
      navigate(`${location.state? location.state: "/"}`)
    }
      )
    .catch(err=>toast(err.code))

    
  }
    



  return (
   <div className="flex justify-center  items-center my-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <figure className="h-20 w-20 mx-auto">
                  <img src={img} alt="" />
                </figure>
        <h2 className="font-semibold text-2xl text-center text-blue-900 dark:text-blue-400">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              value={email} 
               onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              required

            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <div className="relative">
                          <input
                          name="password"
                          type={showpassword?"text": "password"} 
                          onChange={(e) => setPassword(e.target.value)}
                          className="input"
                          placeholder="Password"
                           value={password}     
                          required
                        />
                        <button onClick={handleShowpass} className="btn btn-xs absolute top-1.5 right-5">{showpassword?<FaEye />:<FaEyeSlash />}</button>
                        </div>
            <div>
              <div className="link link-hover text-blue-900">
                      Forget Password
              </div>
            </div>

            

            <button type="submit" className="btn bg-linear-to-r from-blue-900 to-blue-400 
            text-white mt-4 rounded-xl">
              Login
            </button>



            <button
          type="button"
          onClick={handleCredentialLogin}
          className="btn bg-linear-to-r from-blue-900 to-blue-400 
            text-white mt-4 rounded-xl"
        >
          Use Demo Credentials
        </button>



            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-blue-900 dark:text-blue-400" to="/registration">
                Register
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

export default Login;