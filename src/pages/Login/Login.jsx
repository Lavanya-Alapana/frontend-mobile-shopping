import React from 'react'
import axios from 'axios'
import {useState} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Login() {
  const[user,setUser]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
   
    try{
      
      const res=await axios.post('https://backend-shopping-avqy.onrender.com/api/login',user, {
        headers: { "Content-Type": "application/json" }
      });

      localStorage.setItem('token',res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Login Successful');
      window.location.href='/products';


    }
    catch(err)
    {
      console.error(err.response?.data?.message || "Login failed");
    alert(err.response?.data?.message || "Login failed");
      
      
    }
  }
  return (
   <>
      <Header/>
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-orange-50/50">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-orange-100">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-400">
              Log In
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>
          
          <form className="mt-8 space-y-6"  onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={user.password}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
            </div>

            
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white 
              bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 
              transition-all duration-200 transform hover:scale-[1.02]"
             
            >
              Sign in
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex justify-center py-3 px-4 border border-orange-200 rounded-lg shadow-sm text-sm font-medium 
              text-orange-500 bg-white hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 
              transition-all duration-200 transform hover:scale-[1.02]"
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
      <Footer/>
   </>
  )
}

export default Login