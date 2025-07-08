import React from 'react'
import pic from '../../../public/about2.jpg'

function About() {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6" id='aboutsec'>About Us</h2>
    <p className="text-lg mb-10 text-gray-600">
      Welcome to <span className="font-semibold text-amber-600">LuxeLink</span> — where passion meets purpose.
      We’re a team of creators, curators, and customer-obsessives dedicated to delivering not just products, but experiences.
    </p>
  </div>
  <div className="flex flex-col md:flex-row items-center gap-8 px-4 py-10">
  <div className="w-full md:w-1/2">
    <img
      src={pic}
      alt="Our team"
      className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-md"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 font-serif">
    <h4 className="text-3xl font-bold underline text-amber-600 mb-6">Our Team</h4>
    <p className="text-gray-700 leading-relaxed text-[17px] tracking-wide">
      At the heart of this brand isn’t just fabric — it’s family. We’re not just designing clothes. We’re designing <span className="italic">moments</span> — the kind you feel in your skin and carry in your spirit. Every thread is chosen with care, every stitch is intentional, and every collection is a reflection of the culture, confidence, and creativity that lives in us all.
      <br /><br />
      Our roots run deep. Inspired by the vibrant rhythm of African streetwear and the bold elegance of modern fashion, we set out to create a brand that doesn’t just make you look good — it makes you feel <strong>seen</strong>. Our designs speak your language: unapologetic, dynamic, and dripping with soul.
      <br /><br />
      But none of this would exist without our team — a collective of stylists, dreamers, coders, curators, photographers, and brand storytellers, each adding a unique rhythm to the runway. Some of us work behind laptops, others behind lenses, a few behind sewing machines — but all of us are powered by the same mission: <em>"How do we make our people feel powerful in what they wear?"</em>
      
    </p>
  </div>
</div>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
    <div>
      <h3 className="text-2xl font-semibold mb-3"><ion-icon name="star-outline" className='text-amber-400'></ion-icon> Our Mission</h3>
      <p className="text-gray-600">
        To make online shopping seamless, joyful, and accessible to everyone — from Lagos to the world.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-3"><ion-icon name="bag-handle-outline" className='text-amber-400'></ion-icon> What We Offer</h3>
      <p className="text-gray-600">
        A curated collection of quality products, fast delivery, and customer-first service.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-3"><ion-icon name="planet-outline" className='text-amber-400'></ion-icon> Our Values</h3>
      <ul className="list-disc pl-5 text-gray-600">
        <li>Integrity in everything we do</li>
        <li>Innovation that empowers our customers</li>
        <li>Inclusivity across borders and backgrounds</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-3"><ion-icon name="location-outline" className='text-amber-400'></ion-icon> Where We're From</h3>
      <p className="text-gray-600">
        Proudly based in Lagos, Nigeria — but built to serve the global village <ion-icon name="globe-outline" className='text-blue-500'></ion-icon>.
      </p>
    </div>
  </div>
</section>
  )
}

export default About