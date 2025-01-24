import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slices/AuthSlice";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const RegisterUser = (e) => {
    e.preventDefault();
    dispatch(createAccount(formdata));
    navigate('/')

  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-black">
        <div className="w-60 h-60 md:w-80 md:h-80  bounce-slow animate-bounce-slow border inbg shadow-xl border-0 rounded-full  absolute top-0 -mt-20 md:-mt-40 overflow-hidden ">
        </div>
        <div className="w-40 h-40 md:w-60 md:h-60 md:block bounce-slow animate-bounce-slow   border bg1 shadow-md shadow-slate-900 border-0 rounded-full  absolute top-60 right-10 -mt-40 overflow-hidden ">
        </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl px-6 ">
        <h1 className="text-gray-100  text-center text-4xl">Sign up</h1>
        <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={RegisterUser}>
            <div>
              {/* <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-100"
              >
                Full Name
              </label> */}
              <div className="mt-2 relative rounded-full shadow-md">
                <input
                  onChange={handleInput}
                  value={formdata.fullName}
                  id="name"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  type="text"
                  required
                  className=" rounded-full appearance-none bg-[#181818] text-white border-0 shadow-lg block w-full px-3 py-4  border border-gray-300 focus:outline-none focus:shadow-outline-inbg focus:border-blue-inbg transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

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
                Create account
              </button>
            </div>

            <p className="text-gray-100 text-center underline  mt-2 ">Already have an Account <Link to={'/'} className="cursor-pointer ">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
