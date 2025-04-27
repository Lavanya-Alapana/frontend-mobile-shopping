import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'


function Register() {
 
    const [user,setUser]=useState({
      firstname:"",
      lastname:"",
      email:"",
      password:""
      
    });



  const handleChange=(e)=>{
  
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
    
      const res=await axios.post('http://localhost:8000/api/register',user);
      toast.success("User Registered Successfully");
      setUser({firstname:"",lastname:"",email:"",password:""});
      
     
    }
    catch(error)
    {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  }
    
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* Register Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600">
              Please register below to create an account
            </p>
          </div>

          {/* Register Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={user.firstname}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg  focus:border-transparent"
                      placeholder="John"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={user.lastname}
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg  focus:border-transparent"
                      placeholder="Doe"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:border-transparent"
                    placeholder="john@example.com"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg  focus:border-transparent"
                    placeholder="••••••••"
                    onChange={handleChange}
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Must be at least 8 characters long
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-orange-400 text-white py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-300"
                onClick={handleSubmit}
              >
                Create Account
                <FaArrowRight className="h-4 w-4" />
              </button>

              {/* Login Link */}
              <div className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/login" className="font-medium text-orange-400 hover:text-orange-600">
                  Sign in
                </a>
              </div>
            </form>
          </div>

          {/* Terms and Privacy */}
          <p className="mt-6 text-center text-xs text-gray-600">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-orange-400 hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-orange-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Register