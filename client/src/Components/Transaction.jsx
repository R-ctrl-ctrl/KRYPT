import React,{useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'
import {shortnerAddress} from '../utils/shortnerAddress.js'
import dummydata from '../utils/dummyData'
import useFetch from '../hooks/useFetch'



const TransactionCard = ({addressTo,addressFrom,timestamp,message,keyword,amount,url})=>{
  const gifUrl = useFetch({keyword})
      return(
        
        <div className='card w-4/12 border-2 border-white bg-gray-900  rounded-md '>
            <a href= {`https://rinkeby.etherscan.io/address/${addressFrom}`}  target='_blank' rel='noopner noreferrer'><p className='text-white'>From : {shortnerAddress(addressFrom)}</p></a>
            <a href= {`https://rinkeby.etherscan.io/address/${addressTo}`}  target='_blank' rel='noopner noreferrer'><p className='text-white'>From : {shortnerAddress(addressTo)}</p></a>
            <p className='text-white'>Amount:{amount}</p>

            {message && (
              <>
              <br />
              <p className='text-white'>Message : {message}</p>
              </>
            )}

            <p className='text-white'>Timestamp:{timestamp}</p>
        </div>
        
      )
}

function Transaction() {

  const {connectedAccount,transactions} = useContext(TransactionContext)
  return (
    <div className='main bg-black p-7'>
      {connectedAccount ? (
        <h1 className='text-white text-center text-3xl'>Latest Transactions are as follows</h1>
      ):(
        <h1 className='text-white text-center text-3xl'>Connect your wallet to see latest transactions</h1>
      )}


      <div className='w-full flex flex-col  items-center space-y-3 my-5'>
        {transactions.reverse().map((transaction,i)=>(
            <TransactionCard key={i} {...transaction} />
        ))}
      </div>
    </div>
  )
}

export default Transaction
