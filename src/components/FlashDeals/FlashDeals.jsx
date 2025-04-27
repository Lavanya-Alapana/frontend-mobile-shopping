import React, { useState, useEffect } from "react";
import axios from "axios";

function FlashDeals() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get("https://backend-shopping-avqy.onrender.com/api/deal/getDeal")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return <p className="text-center text-gray-600">Loading Flash Deals...</p>;
  }

  return (
    <section className="relative w-full mx-auto">
      <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[400px] rounded-lg overflow-hidden">
       
        <img
          src={images[current].image}
          alt="Flash Deal"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />

     
        <div
          className="absolute top-6 left-4 sm:top-20 sm:left-15 md:top-20 md:left-20
          w-4/5 sm:w-3/4 md:w-1/2 text-center sm:text-left"
        >
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-500 break-words">
            {images[current].title}
          </h2>
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-orange-400 mt-2 md:mt-4">
            {images[current].subtitle}
          </p>
          <p className="text-xl sm:text-3xl md:text-5xl font-semibold text-orange-400 mt-3 md:mt-7">
            {images[current].price}
          </p>
        </div>

     
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 
          bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-75 transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 
          bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-75 transition"
        >
          ❯
        </button>
      </div>

     
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition ${
              current === index ? "bg-orange-500 scale-110" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default FlashDeals;
