import React,{useState,useEffect,useContext} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import { Context } from '../context/StateContext'
import { Fireworks } from '../lib/utilis'



const success = () => {
    const contextii = useContext(Context)
    const {setcartitems,settotalprice,settotalqty} = contextii

useEffect(() => {
    console.log("success")
    
  localStorage.clear()
  setcartitems([])
  settotalprice(0)
  settotalqty(0)
Fireworks()
  
}, [])


  return (
    <div className='success-wrapper'>
<div className='success'> 
<p className='icon'>
<BsBagCheckFill/>

</p>
<h2>Thank you for your order !</h2>
<p className='email-msg'>Check your email inbox for the receipt</p>
<p className='description'> If you have any question, please email:

<a  className='email' href='mailto:OK218219@example.com'>mailto:OK218219@example.com</a>

</p>
<Link href="/">
<button type='button' width="300px" className='checkout' >
    Continue shopping
</button>
</Link>
 </div>

    </div>
  )
}

export default success