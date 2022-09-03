import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='footer'>
<div className="logo-basket">

<Image className='logo' src="/w.png" alt="logo" width="70" height="50" />
{/* <span className='gap'></span> */}
<h1> <span>|</span>  Basketballs</h1>
</div>

<p>Made by Omar & Khalid with love 💙 </p>



    </div>
  )
}

export default Footer