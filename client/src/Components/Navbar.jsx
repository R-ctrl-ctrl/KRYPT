import React from 'react'
import pic from '../images/bull.png'


function Navbar() {
  return (
    <div className='nav bg-black w-full  h-28 flex justify-around'>
      <div className="first h-full flex content-center items-center mx-10 space-x-10">
        <img src={pic} alt="" className='h-full'/>
        <p className='text-4xl text-white font-bold'>KRYPT</p>
      </div>
      
      <div className='second flex items-center space-x-14'>
        <p className='text-white font-bold text-2xl hover:block hover:bg-white hover:text-black hover:px-4 hover:py-2 hover:cursor-pointer'>Market</p>
        <p className='text-white font-bold text-2xl hover:block hover:bg-white hover:text-black hover:px-4 hover:py-2 hover:cursor-pointer'>Tutorial</p>
        <p className='text-white font-bold text-2xl hover:block hover:bg-white hover:text-black hover:px-4 hover:py-2 hover:cursor-pointer'>Design</p>
        <p className='text-white font-bold text-2xl hover:block hover:bg-white hover:text-black hover:px-4 hover:py-2 hover:cursor-pointer'>Wallets</p>
      </div>
    </div>

    
  )
}

export default Navbar
