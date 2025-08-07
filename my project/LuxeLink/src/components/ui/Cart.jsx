import React from 'react'

function Cart({ cart=[], removeFromCart,changeQuantity }) {
  
  return (
   <div className="p-4 max-w-2xl mx-auto bg-white shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4"><ion-icon className='size-8 cursor-pointer' name="cart-outline"></ion-icon> Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-2">
            <div>
              <span className="font-semibold">{item.title}</span>
              <p className="text-sm text-gray-600">${item.price}</p>
              <div className="flex items-center gap-2 mt-1">
                
  <button
    onClick={() => changeQuantity(item.id, -1)}
    className="px-2 py-1 bg-gray-200 rounded"
  >
    −
  </button>
  <span>{item.quantity || 1}</span>
  <button
    onClick={() => changeQuantity(item.id, +1)}
    className="px-2 py-1 bg-gray-200 rounded"
  >
    +
  </button>
</div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline text-sm"
            >
              Remove
            </button>
          </div>
          
        ))
        
        
      ) : (
        <p className="text-gray-500">Cart is empty.</p>
      )}
      <div className="text-right mt-6 font-bold text-lg">
        Total: $
        {cart
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>

    </div>


  )
}

export default Cart