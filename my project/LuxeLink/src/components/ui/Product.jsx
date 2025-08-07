import React from 'react'

function Product({name,imagesrc,price,desc, onAddToCart}) {
   
  return(
    <div className='bg-white rounded-lg shadow-md p-4 w-full max-w-xs'>
        <img src={imagesrc} 
        alt={`${name}`} className='w-full h-48 object-contain mb-4' />
        <h2 className='text-lg font-semibold mb-2'>{name || "item name"}</h2>
        <p className='mb-2 text-gray-600 text-sm'>{desc || "item description"}</p>
        <p className='text-blue-600 font-bold'>${price || "price"}</p>

        <button onClick={onAddToCart} className='border bg-amber-400 rounded-[40px] py-3 px-4 font-bold hover:bg-white hover:text-amber-400 hover:underline font-serif'>

        Add to Cart</button>
        
    </div>
  );
}

export default Product;