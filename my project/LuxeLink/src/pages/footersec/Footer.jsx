import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#fed] text-black py-10 px-6">
  <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
  
    <div>
      <h4 className="font-bold mb-4">About Us</h4>
      <p className="text-sm text-black">
        We’re here to make online shopping effortless, joyful, and secure — from Lagos to the world 🌍.
      </p>
    </div>

    
    <div>
      <h4 className="font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm text-black">
        <li><a href="#" className="hover:text-amber-400 hover:underline">Home</a></li>
        <li><a href="#" className="hover:text-amber-400 hover:underline">Products</a></li>
        <li><a href="#" className="hover:text-amber-400 hover:underline">Services</a></li>
        <li><a href="#" className="hover:text-amber-400 hover:underline">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <h4 className="font-bold mb-4">Connect</h4>
      <div className="flex space-x-4 text-lg text-black">
        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
      </div>
    </div>

  
    <div>
      <h4 className="font-bold mb-4">Stay Updated</h4>
      <form className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Your email"
          className="p-2 rounded text-black"
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="mt-10 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} LuxeLink Shop. All rights reserved.
  </div>
</footer>
  )
}

export default Footer