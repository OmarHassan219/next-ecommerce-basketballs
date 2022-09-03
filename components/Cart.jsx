import React , {useState , useEffect , useContext} from 'react'
import { Context } from '../context/StateContext'
import { urlFor } from '../lib/client'
import { GiBasketballBasket } from "react-icons/gi"
import { AiFillCloseCircle } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import getStripe from '../lib/get-stripe'





const Cart = () => {





    const context =useContext(Context)
    const {cartitems ,setshowcart , totalqty , removeitem , totalprice , setcartitems} = context
    const handleCheckout = async() =>{
        const stripe = await getStripe()
        
        const response =await fetch('/api/stripe',{method:'POST',headers:{'Content-Type':'application/json',},  
        
        body:JSON.stringify(cartitems),}
        
        )
        
        if(response.statusCode === 500) return
        
        const data =await response.json()
        
       
        
        stripe.redirectToCheckout({sessionId: data.id})
          }
        
    
console.log(cartitems)

    return (
    <div className='cart-background'>
<div className="cartt">

<div className="close-cart">
    <p>My Bag <span>{totalqty}</span></p>
    <AiFillCloseCircle className='close-icon' onClick={() => setshowcart(false)} size={20}/>
</div>

<div className={cartitems.length ? "barrier" : "barrier none"}></div>

<div className={cartitems.length ? "not-empty" : "empty" } >
    
    <GiBasketballBasket color='#ccc' size={150}/>
    <h1>Try adding something to the basket</h1>
    
    </div>



{cartitems.map((item , i) => (

<div className="item" key={i}>
<img src={urlFor(item?.image[0])} className='land-page-img'  alt="product"   />
<div className="cart-ball-details">
    <p>{item.name}</p>
    <div className="qty-price">
        <span>Qty:{item.quantity}</span>
        <span>${item.price}</span>
    </div>
</div>
    <AiOutlineClose  onClick={() => removeitem(item , i )}    className='item-close'/>

</div>

))}

{cartitems.length ? <div className="total-pay">
<p>Subtotal: {totalprice.toFixed(2)}</p>


        <button className='checkout' onClick={handleCheckout}>
          Checkout
        </button>
      
        
</div>
 : '' }


</div>






    </div>
  )
}

export default Cart