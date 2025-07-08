import React from 'react'


function Hero() {
  return (
    <section className='h-[85vh]  bg-cover bg-[0px_60%] bg-[url("/about.jpg")]'>  
        <div className='text-white  ml-[48vh] top-[50vh] absolute font-serif grid grid-rows-3 text-center'>
          <div className='font-bold text-4xl '><h2>Effortless Elegance. Delivered Daily.</h2></div>
          <div className='text-2xl'><p>Shop timeless design with modern edge—all in one seamless scroll.</p></div>
          <div><button className='font-bold border px-6 py-4 hover:text-amber-400 hover:underline rounded-[30px] text-2xl animate-bounce hover:animate-none'>SHOP NOW</button></div>

        </div>

    </section>
  )
}

export default Hero;