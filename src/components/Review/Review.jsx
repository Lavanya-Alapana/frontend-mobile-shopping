import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from "lucide-react";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/api/review/getReview')
      .then(res => setReviews(res.data))
      .catch(err => console.log(err));
  }, []);

  const nextSlide = () => {
    setStartIndex(prevIndex => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setStartIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-4'>
      {/* Left Section - Ratings Summary */}
      <div className='text-center md:text-left'>
        <h3 className='text-xl font-bold'>Excellent</h3>
        <p className='text-lg'><span className='text-orange-500 text-2xl'>★★★★★</span></p>
        <p className='text-gray-600'>Based on <span className='font-bold'>132 Reviews</span></p>
        <img src="https://res.cloudinary.com/decxhwk1i/image/upload/v1742475412/mobile-shop/lqdzhjcw2varyyarers1.png" 
             alt="Google Logo" 
             className='w-20 mx-auto md:mx-0' />
      </div>
      
      {/* Right Section - Reviews Carousel */}
      <div className='relative w-full md:w-3/4 flex justify-center items-center'>
        <button onClick={prevSlide} className='absolute left-0 p-2 bg-gray-300 rounded-full'>
          <ChevronLeft size={24} />
        </button>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 md:mt-0 overflow-hidden w-full'>
          {reviews.slice(startIndex, startIndex + 4).map((item, index) => (
            <div key={index} className='bg-white p-4 shadow-md rounded-lg'>
              <div className='flex items-center space-x-2'>
                <img src={item.profilePic} alt="profile" className='w-10 h-10 rounded-full' />
                <div>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-gray-500 text-sm'>{item.date}</p>
                </div>
              </div>
              <p className='text-orange-500 text-lg mt-2'>★★★★★</p>
              <p className='text-gray-700 mt-2'>{item.comment}</p>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className='absolute right-0 p-2 bg-gray-300 rounded-full'>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Review;