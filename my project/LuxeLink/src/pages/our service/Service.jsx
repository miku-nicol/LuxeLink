import React from 'react'

function Service() {
  return (
    <section className="py-12 px-6 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-8" id='servicesec'>Our Services</h2>

  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
    
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg">
      <ion-icon name="rocket-outline" className="text-4xl text-amber-500 mb-4"></ion-icon>
      <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
      <p className="text-gray-600 text-sm">We get your orders to your doorstep in record time, no matter where you are.</p>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg ">
      <ion-icon name="shield-checkmark-outline" className="text-4xl text-amber-500 mb-4"></ion-icon>
      <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
      <p className="text-gray-600 text-sm">Safe, encrypted, and reliable payment gateways to protect your transactions.</p>
    </div>

    
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
      <ion-icon name="people-outline" className="text-4xl text-amber-500 mb-4"></ion-icon>
      <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
      <p className="text-gray-600 text-sm">Got a question or issue? Our support team is ready anytime, anywhere.</p>
    </div>
  </div>
</section>
  )
}

export default Service