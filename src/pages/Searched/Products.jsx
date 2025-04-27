import React from 'react';

function Products({ products }) {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-15">
      {products.length > 0 ? (
        products.map((product) => (
          <div 
            key={product._id} 
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 relative"
          >
         
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-md">
              -{product.discountPercentage}%
            </div>

         
            <div className="flex justify-center">
              <img src={product.imageUrl} alt={product.name} className="w-40 h-60 object-contain transform transition-transform duration-300 hover:scale-120"/>
            </div>

         
            <div className="text-center mt-3">
              <h3 className="text-gray-600 text-sm uppercase">{product.brand}</h3>
              <p className="text-black font-semibold">{product.name}</p>
            </div>

         
            <div className="flex justify-center items-center gap-2 mt-2">
              <p className="line-through text-gray-500 text-sm">Rs. {product.originalPrice}</p>
              <p className="text-orange-500 font-bold text-lg">Rs. {product.discountedPrice}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">No Products Found</p>
      )}
    </div>
  );
}

export default Products;
