import React from 'react'

function Services() {
  return (
    <div className='services bg-black flex p-4'>
      <div className="first  w-5/12 flex items-center justify-center">
        <p className='text-white text-5xl w-9/12 font-bold'>Services that we continue to improve</p>
      </div>
      <div className="second w-7/12 space-y-3">
        <div className="card w-full border-2 border-white rounded-xl p-3 bg-gray-900">
          <div className="heading text-white text-2xl font-semibold">Best Exchnge Rates</div>
          <div className="content text-white text-xl">Security is one of our topmost priority. We always take security very very seriously. We apply necessary protocols</div>
        </div>

        <div className="card w-full border-2 border-white rounded-xl p-3 bg-gray-900">
          <div className="heading text-white text-2xl font-semibold">Favourite Transactions</div>
          <div className="content text-white text-xl">Security is one of our topmost priority. We always take security very very seriously. We apply necessary protocols</div>
        </div>

        <div className="card w-full border-2 border-white rounded-xl p-3 bg-gray-900">
          <div className="heading text-white text-2xl font-semibold">Security Guaranteed</div>
          <div className="content text-white text-xl">Security is one of our topmost priority. We always take security very very seriously. We apply necessary protocols</div>
        </div>
      </div>
    </div>
  )
}

export default Services
