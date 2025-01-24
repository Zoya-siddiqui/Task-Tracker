import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Slices/AuthSlice";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formdata, setFormData] = useState({
      
      email: "",
      password: "",
    });

    console.log(formdata)
  
    const handleInput = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formdata,
        [name]: value,
      });
    };
  
    const  LoginUser = async (e) => {
      e.preventDefault();
      try{
        const response = await  dispatch(loginUser(formdata));
        if(response?.payload?.success){
          navigate('/dashboard')
        }
      
      }
      catch(error){
        console.log(error)
      }
  
    };
  
  return (
    <div>
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-black">
        <div className="w-60 h-60 md:w-80 md:h-80  bounce-slow animate-bounce-slow border inbg shadow-xl border-0 rounded-full  absolute top-0 -mt-20 md:-mt-40 overflow-hidden ">
        </div>
        <div className="w-40 h-40 md:w-60 md:h-60 md:block bounce-slow animate-bounce-slow   border bg1 shadow-md shadow-slate-900 border-0 rounded-full  absolute top-60 right-10 -mt-40 overflow-hidden ">
        </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl px-6 ">
        <h1 className="text-gray-100  text-center text-4xl">Sign in</h1>
        <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={LoginUser}>
        
            <div className="mt-6">
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-100"
              >
                Email address
              </label> */}
              <div className="mt-1 relative rounded-full shadow-sm">
                <input
                  onChange={handleInput}
                  value={formdata.email}
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Id"
                  type="email"
                  required
                  className="appearance-none bg-[#181818] text-white border-0 block w-full px-3 py-4 border border-gray-300 rounded-full focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              {/* <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-100"
              >
                Password
              </label> */}
              <div className="mt-1 rounded-full shadow-sm">
                <input
                  onChange={handleInput}
                  value={formdata.password}
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Enter Password"
                  className="appearance-none block bg-[#181818] text-white border-0 w-full px-3 py-4 border border-gray-300 rounded-full focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-full text-white inbg hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Login
              </button>
            </div>

            <p className="text-gray-100 text-center underline  mt-2 ">Dont have an account ? <Link to={'/register'} className="cursor-pointer ">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
