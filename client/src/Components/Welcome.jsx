import React from 'react'
import logo from '../images/Ethlogo.png'
import {TransactionContext} from '../context/TransactionContext'
import { useContext } from 'react'
import {shortnerAddress} from '../utils/shortnerAddress.js'

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="w-9/12 border-2 border-black rounded-lg px-3 py-2 bg-gray-200"
  />
);

function Welcome() {
  const {connectWallet , connectedAccount ,formdata,setformdata,handlechange,sendTransaction} = useContext(TransactionContext)
  // const Input = ({placeholder,name,type,handlechange})=>(
  //   <input 
  //   placeholder={placeholder}
  //   type={type}
  //   onChange = {(e)=> handlechange(e,name)}
  //   />
  // )
  

 

  
  const handleSubmit = (e)=>{
    const {addressTo,amount,keyword,message} = formdata
    
    e.preventDefault()
    
    if(!addressTo || !amount || !keyword ||!message) return
    console.log('yes')
    sendTransaction()
  }

  

  return (
    <div className='wlc bg-black p-20'>
      <p className='text-center  text-6xl text-white  w-7/12 mx-auto font-bold '> A trusted site to Buy and Sell CryptoAssets</p>
      {!connectedAccount && (
          <button onClick={connectWallet} className='bg-blue-900 block my-16 px-6 py-4 font-bold rounded-xl text-white mx-auto'>Start Now</button>
      )}
      
      <div className="card relative   w-96   h-60 mx-auto my-10  bg-orange-600 rounded-2xl px-4 py-2">
          <div className='circle my-4  h-12 w-12 border-black border-2 rounded-3xl flex justify-center items-center '>
            <img src={logo} alt="" />
          </div>
          <div className="bottom  absolute bottom-1 left-3">
            <p className='text-2xl'>{ shortnerAddress(connectedAccount)}</p>
            <p className='text-2xl'>Ethereum</p>
          </div>
      </div>

      <div className="form flex  flex-col w-5/12 mx-auto  bg-gray-600  items-center space-y-3 p-3">
        <Input name='addressTo'  placeholder='enter addressTo'  type="text" handleChange={handlechange} />
        <Input name='amount' placeholder='enter amount'  handleChange={handlechange} className='w-9/12 border-2 border-black rounded-lg px-3 py-2 bg-gray-200' type="text"  handlechange={handlechange}/>
        <Input name='keyword' placeholder='enter keyword'  handleChange={handlechange} className='w-9/12 border-2 border-black rounded-lg px-3 py-2 bg-gray-200' type="text"  handlechange={handlechange}/>
        <Input name='message' placeholder='enter message' handleChange={handlechange} className='w-9/12 border-2 border-black rounded-lg px-3 py-2 bg-gray-200' type="text"  handlechange={handlechange}/>
        
        <div className='h-1 w-9/12 bg-black'></div>
        <button onClick={handleSubmit} className='bg-blue-900 block   px-3 py-2 font-bold rounded-xl text-white '>Submit Now</button>
      </div>


    </div>
  )
}

export default Welcome
