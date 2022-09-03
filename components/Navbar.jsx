import React,{useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiShoppingBag2Line} from 'react-icons/Ri'
import {Context} from '../context/StateContext'
import Cart from './Cart'



const Navbar = () => {
    const cartcontext = useContext(Context)
    const {qty ,showcart ,setshowcart  , setscroll ,scroll , totalqty} = cartcontext

  return (
    <div className={scroll ? 'nav down' : 'nav' }>

<Link href='/'><a>


  
<Image className='logo' src="/w.png" alt="logo" width="70" height="50" />
</a>
</Link>

<button type='button' className='cart'>

<RiShoppingBag2Line onClick={() => setshowcart(true)} size={30}/>
<span>{totalqty}</span>
</button>

{showcart && <Cart/>}
    </div>
  )
}

export default Navbar