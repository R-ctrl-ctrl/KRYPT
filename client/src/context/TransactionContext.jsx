import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'
export const TransactionContext = React.createContext()
const { ethereum } = window


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    return transactionContract

}


export const TransactionProvider = ({ children }) => {

    const [connectedAccount, setconnectedAccount] = useState("")
    const [formdata,setformdata] = useState({addressTo:'',amount:'',keyword:'',message:''})
    const [transactionCount,settransactionCount] = useState(localStorage.getItem('transactionCount'))
    const [transactions, setTransactions] = useState([]);

    const handlechange = (e,name) =>{
        setformdata((prevdata)=>({...prevdata,[name]:e.target.value}))
    }

    const getAllTransactions = async()=>{
        try{
            if(!ethereum) return alert('please install metamask')
            const transactionContract = getEthereumContract()
            const availableTransactions = await transactionContract.getAllTransaction()
            
            const structuredTransactions = availableTransactions.map((transaction)=>({
                addressTo : transaction.receiver,
                addressFrom:transaction.sender,
                timestamp : new Date(transaction.timestamp.toNumber()*1000).toLocaleString(),
                message : transaction.message,
                keyword:transaction.keyword,
                amount : parseInt(transaction.amount._hex) / (10 ** 18)
            }))
            console.log(structuredTransactions)
            setTransactions(structuredTransactions)

        }catch(err){
            console.log(err)
        }
    }


    const checkIfWalletConnected = async () => {
        try {

            if (!ethereum) return alert('please install metamask')

            const accounts = await ethereum.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setconnectedAccount(accounts[0])
                getAllTransactions()
            }
            else {
                console.log("No accounts found")
            }
        } catch (err) {
            console.log(err)
        }

    }


    const checkIfTransactionExist = async ()=>{
        try{
            const transactionContract = getEthereumContract()
            const transactionCount = await transactionContract.getTransactionCount();
            localStorage.setItem("transationCount",transactionCount)
        } catch(err){
            console.log(err)
        }
        
        

    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('please install metamask')
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setconnectedAccount(accounts[0])

        }
        catch (err) {
            console.log(err)
        }


    }

    const sendTransaction = async ()=>{
        try{
            if (!ethereum) return alert('please install metamask')
            const {addressTo,amount,keyword,message} = formdata
            const transactionContract = getEthereumContract()
            const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:connectedAccount,
                    to:addressTo,
                    gas:'0x5208',  //hex 21000
                    value:parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword)
              await transactionHash.wait()

              const transactionCount = await transactionContract.getTransactionCount();
              settransactionCount(transactionCount.toNumber())
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        checkIfWalletConnected();
        checkIfTransactionExist()
    }, [])
    return (
        <TransactionContext.Provider value={{ connectWallet , connectedAccount ,formdata,setformdata,handlechange,sendTransaction,transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}