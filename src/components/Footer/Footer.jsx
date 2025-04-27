import React from 'react';

function Footer() {
  return (
    <div className="bg-black text-white px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-10">
        {/* Company Info */}
        <div>
          <h2 className="font-bold text-lg">GADGET REBIRTH INNOVATIONS PRIVATE LIMITED</h2>
          <p className="mt-2  text-gray-400">Opposite to RTO Office, Raghavendra Colony, Kondapur, Hyderabad, Telangana 500084</p>
          <p className="mt-2  text-gray-400">
            Phone: <a href="tel:+918374529225" className="hover:underline">+91-8374529225</a>
          </p>
          <p className="mt-1  text-gray-400">
            Email: <a href="mailto:ping@gadgetrebirth.com" className="hover:underline">ping@gadgetrebirth.com</a>
          </p>
        </div>

        {/* Shop Section */}
        <div className='ml-15'>
          <h2 className="font-bold text-lg">SHOP</h2>
          <ul className="mt-2 space-y-3 text-gray-400 text-xs">
            <li className="hover:text-white cursor-pointer">HOME</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">ABOUT US</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">SHOP BY BRAND</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Track Your Order</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h2 className="font-bold text-lg">INFORMATION</h2>
          <ul className="mt-2 space-y-3 text-gray-400 text-xs">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Shop by Price Section */}
        <div>
          <h2 className="font-bold text-lg">SHOP BY PRICE</h2>
          <ul className="mt-2 space-y-3 text-gray-400 text-xs">
            <li className="hover:text-white cursor-pointer">Mobile Under 5000</li>
            <li className="hover:text-white cursor-pointer">Mobile Under 10000</li>
            <li className="hover:text-white cursor-pointer">Mobile Under 15000</li>
            <li className="hover:text-white cursor-pointer">Mobile Under 20000</li>
            <li className="hover:text-white cursor-pointer">Mobile Under 25000</li>
          </ul>
        </div>
      </div>

      {/* Payment Icons Centered */}
      <div className="flex justify-center mt-6 space-x-4">
        <img src="https://res.cloudinary.com/decxhwk1i/image/upload/v1742475191/mobile-shop/rqxc3zdxr6pac2flukml.svg" alt="Visa" className="h-8" />
        <img src="https://res.cloudinary.com/decxhwk1i/image/upload/v1742475219/mobile-shop/ymmifbntccr5lh7nubr0.svg" alt="MasterCard" className="h-8" />
        <img src="https://res.cloudinary.com/decxhwk1i/image/upload/v1742475247/mobile-shop/smtfkqjc7axpnbquuqk7.svg" alt="Maestro" className="h-8" />
        <img src="https://res.cloudinary.com/decxhwk1i/image/upload/v1742475318/mobile-shop/umn3ufibtyvgwsrsj79s.svg" alt="American Express" className="h-8" />
        <img src="https://res.cloudinary.com/decxhwk1i/image/upload/v1742475276/mobile-shop/tj9xy4mt5vr5giq1grxh.svg" alt="Google Pay" className="h-8" />
      </div>
    </div>
  );
}

export default Footer;