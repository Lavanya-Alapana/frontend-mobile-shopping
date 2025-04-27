import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
   
    setUser(storedUser);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <>
      {/* Top Header - Desktop Only */}
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : ''}`}>
        <nav className="p-4 mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-semibold text-gray-900">
              SmartShopz
            </h1>

            <div className="flex flex-col items-end gap-2">
              <p className="text-orange-400 font-semibold text-sm tracking-wider">
                FREE SHIPPING ON ALL ORDERS FOR LIMITED TIME
              </p>
              {/* Conditional Auth Buttons */}
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold uppercase">
                    {user.firstname.charAt(0)}
                  </div>
                  <p className="text-gray-800 text-sm">{user.firstname}</p>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-orange-400 hover:underline"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex gap-3 text-gray-800 text-sm">
                  <Link to="/login" className="hover:underline">Sign In</Link>
                  <p>or</p>
                  <Link to="/register" className="hover:underline">Create an Account</Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        <hr className="border-t border-gray-200 my-2" />
      </div>

      {/* Sticky Navigation Bar */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Mobile Header */}
            <div className="flex lg:hidden items-center justify-between h-16">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-md"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>

              <Link to="/" className="text-xl font-semibold text-gray-900">
                SmartShopz
              </Link>

              <div className="flex items-center gap-6">
                {user ? (
                  <>
                    <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold uppercase">
                      {user.firstname.charAt(0)}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-orange-400 hover:underline"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="text-gray-700 hover:text-orange-400">
                    <FaUser size={20} />
                  </Link>
                )}
                <Link to="/cart" className="text-gray-700 hover:text-orange-400 relative">
                  <FaShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </div>
            </div>

            {/* Desktop Header Navigation */}
            <div className="hidden lg:flex items-center justify-between py-3">
              <div className={`transition-all duration-300 ${isScrolled ? 'opacity-100 w-auto' : 'opacity-0 w-0 lg:w-auto lg:opacity-0'}`}>
                <Link to="/" className="text-2xl font-semibold text-gray-900">
                  SmartShopz
                </Link>
              </div>

              <ul className={`flex gap-10 font-semibold tracking-wider text-md transition-all duration-300 ${isScrolled ? 'ml-auto' : 'mx-auto'}`}>
                {["HOME", "PRODUCTS", "CART", "WISHLIST", "CONTACT"].map((item) => (
                  <li key={item} className="relative group">
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <nav className="bg-white border-t border-gray-100">
              <ul className="px-4 py-2">
                {["HOME", "PRODUCTS", "CART", "WISHLIST", "CONTACT"].map((item) => (
                  <li key={item} className="border-b border-gray-100 last:border-none">
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="block py-3 text-gray-800 hover:text-orange-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <hr className="border-t border-gray-200" />
      </div>
    </>
  );
}

export default Header;
