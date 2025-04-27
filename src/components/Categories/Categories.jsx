import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Categories() {

    const images=[
        "https://res.cloudinary.com/decxhwk1i/image/upload/v1742365568/mobile-shop/zddif8grbfyeg18enwq3.png",
        "https://res.cloudinary.com/decxhwk1i/image/upload/v1742365619/mobile-shop/fpbtijo8sgk09uakpi8m.png",
        "https://res.cloudinary.com/decxhwk1i/image/upload/v1742366231/mobile-shop/kyumddxftgltvr2jmpzc.png",
        "https://res.cloudinary.com/decxhwk1i/image/upload/v1742366295/mobile-shop/hchyv7eeqjrzxhpf8lq0.png",
    ]

  return (
    <>

    <div className="flex items-center my-6 mx-14">
    <hr className="flex-grow border-black border-1" />
    <p className="mx-15 text-black font-semibold tracking-wider">REFURBISHED BY CATEGORY</p>
    <hr className="flex-grow border-black border-1" />
    </div>

    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 md:px-10'>
        {
        images.map((image,index)=>(
            <li key={index}> 
            <Link to="/"> <img src={image} alt="categories"  className='size-70'/></Link>  
            </li>
        ))
    }
    </ul>
    
    
    
    
    
    
    </>
  )
}

export default Categories