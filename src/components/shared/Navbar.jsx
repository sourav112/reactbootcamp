import React from 'react'
import { Routes } from '../../routes';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <section className='bg-gray-300 p-4 '>
    <div className='container mx-auto'>
    <header className='flex items-center justify-between '>
    <Link to={Routes.HOME}>
    <img
    src='https://i.ibb.co/LSg6pnJ/logo.png'
    alt="LOGO"
    className='w-20 cursor-pointer'
    />
    </Link>
    <nav className='space-x-4'>
        <span className='hover:text-orange-500 cursor-pointer'>Brand</span>
        <span className='hover:text-orange-500' cursor-pointer>Offer</span>
        <span className='hover:text-orange-500' cursor-pointer>About Us</span>
        <Link to={Routes.Product} className='hover:text-orange-500' cursor-pointer>Product</Link>
    </nav>
  </header>
    </div>
  </section>
  );
}

export default Navbar