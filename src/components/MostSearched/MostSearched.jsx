import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from '../../pages/Searched/Products'

function MostSearched() {
  const[mostSearched,setMostSearched]=useState([])
  useEffect(()=>{
  axios.get('https://backend-shopping-avqy.onrender.com/api/search/getProducts')
  .then((response)=>{
    setMostSearched(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
  },[])
  
  return (
    <>
    <div className="flex items-center my-6 mx-14">
    <hr className="flex-grow border-black border-1" />
    <p className="mx-15 text-black font-semibold tracking-wider">MOST SEARCHED PRODUCTS</p>
    <hr className="flex-grow border-black border-1" />
    </div>

    <Products products={mostSearched}/>


    
    
    </>
  )
}

export default MostSearched