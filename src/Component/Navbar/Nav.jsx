import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/ddLogo.png';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='fixed top-0 md:top-2 left-0 w-full z-50 bg-white text-black'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Left Section */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link to='/about' className='text-black hover:text-gray-300 text-md uppercase tracking-wider font-medium font-jakarta'>
              About Us
            </Link>
            <Link to='/work' className='text-black hover:text-gray-300 text-md uppercase tracking-wider font-medium font-jakarta'>
              Our Latest Work
            </Link>
          </nav>

          {/* Logo in Center */}
          <div className='flex-shrink-0'>
            <Link to='/' className='flex items-center'>
              <img src={Logo} className='h-12' alt='Logo' />
            </Link>
          </div>

          {/* Right Section */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link to='/news' className='text-black hover:text-gray-300 text-md uppercase tracking-wider font-medium font-jakarta'>
              News
            </Link>
            <Link to='/merch' className='text-black hover:text-gray-300 text-md uppercase tracking-wider font-medium font-jakarta'>
              Merch
            </Link>
            <Link to='/login' className='px-6 py-2 border border-black text-md font-jakarta font-medium rounded-md text-black hover:bg-white hover:text-black transition-colors duration-300'>
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='p-2 rounded-md text-black hover:text-gray-300 focus:outline-none'>
              {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-black text-white'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link to='/about' className='block px-3 py-2 hover:bg-gray-800 text-sm uppercase tracking-wider font-medium'>
              About Us
            </Link>
            <Link to='/work' className='block px-3 py-2 hover:bg-gray-800 text-sm uppercase tracking-wider font-medium'>
              Our Latest Work
            </Link>
            <Link to='/news' className='block px-3 py-2 hover:bg-gray-800 text-sm uppercase tracking-wider font-medium'>
              News
            </Link>
            <div className='pt-4'>
              <Link to='/login' className='block w-full text-center px-5 py-3 border border-white text-sm font-medium rounded-md hover:bg-white hover:text-black transition-colors duration-300'>
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}