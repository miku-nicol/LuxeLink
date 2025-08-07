import React from 'react';
import Cart from './';

function CartSidebar({ isOpen, onClose, cart, removeFromCart,changeQuantity }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl border-l transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b bg-gray-100">
        <h2 className="text-xl font-bold"><ion-icon className='size-8 cursor-pointer' name="cart-outline"></ion-icon> Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl">&times;</button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
        <Cart cart={cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity}/>
      </div>
    </div>
  );
}

export default CartSidebar;