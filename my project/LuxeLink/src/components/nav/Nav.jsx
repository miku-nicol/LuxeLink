import React, { useState } from 'react';
import Logo from '../imgaes/logo';
import { Link } from 'react-router-dom';

function Nav({ cartCount, onSigninClick, onSignupClick, onCartClick, setSearchTerm, searchTerm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#fed] shadow-md sticky top-0 z-50">
      <div className=" h-16 flex items-center justify-between px-4 py-3 sm:px-2 sm:py-4">
        {/* Logo */}
        <div><Logo /></div>

        {/* Toggle button (mobile only) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            <ion-icon name={menuOpen ? 'close-outline' : 'menu-outline'}></ion-icon>
          </button>
        </div>


      {/* Nav links */}
      <div className={`lg:flex lg:items-center lg:justify-center ${menuOpen ? 'block' : 'hidden'} px-4 pb-4 lg:pb-0`}>
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 font-serif text-center ">
          <li className="hover:text-amber-400 hover:underline"><a href="#home">Home</a></li>
          <li className="hover:text-amber-400 hover:underline"><a href="#productsec">Product</a></li>
          <li className="hover:text-amber-400 hover:underline"><a href="#servicesec">Our Service</a></li>
          <li className="hover:text-amber-400 hover:underline"><a href="#aboutsec">About us</a></li>
        </ul>

        {/* Auth + Search + Cart (mobile only) */}
        <div className="mt-4 flex flex-col gap-4 lg:hidden">
          {/* Search */}
          <div className="border bg-white border-black rounded-full px-3 flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="outline-none bg-transparent px-2 py-1 w-full"
            />
            <button><ion-icon className="size-6" name="search-outline"></ion-icon></button>
          </div>

          {/* Auth buttons */}
          <div className="flex gap-2 border border-black rounded-full px-3 py-2 justify-center hover:bg-amber-400 font-serif font-medium hover:text-white">
            <ion-icon className="size-6" name="person-outline"></ion-icon>
            <button onClick={onSignupClick}>Sign up</button>
            <button onClick={onSigninClick}>Sign in</button>
          </div>

          {/* Cart icon */}
          <div className="flex justify-center" onClick={onCartClick}>
            <div className="relative cursor-pointer">
              <ion-icon className="size-8" name="cart-outline"></ion-icon>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>




        {/* Search & Icons (desktop) */}
        <div className="hidden lg:flex gap-6 items-center">
          {/* Search bar */}
          <div className="border bg-white border-black rounded-full px-3 flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="outline-none bg-transparent px-2 py-1"
            />
            <button><ion-icon className="size-6" name="search-outline"></ion-icon></button>
          </div>

          {/* Auth buttons */}
          <div className="flex gap-2 border border-black rounded-full px-3 py-1 hover:bg-amber-400 font-serif font-medium hover:text-white">
            <ion-icon className="size-6" name="person-outline"></ion-icon>
            <button onClick={onSignupClick}>Sign up</button>
            <button onClick={onSigninClick}>Sign in</button>
          </div>

          {/* Cart icon with badge */}
          <div className="relative cursor-pointer" onClick={onCartClick}>
            <ion-icon className="size-8" name="cart-outline"></ion-icon>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Nav;