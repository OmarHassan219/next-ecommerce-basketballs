import React , {useState , useEffect} from 'react'
import {toast} from 'react-hot-toast'



export const Context = React.createContext()




const StateContext = ({children}) => {

  
  
const [showcart, setshowcart] = useState(false)

// const [qty, setqty] = useState(0)
const [cartitems, setcartitems] = useState([])
const [totalprice, settotalprice] = useState(0)
const [totalqty, settotalqty] = useState(0)
const [scroll, setscroll] = useState(false)  



useEffect(() => {
  // let pricecopy = totalprice

  const storecart = JSON.stringify(cartitems) 
  const storetotalprice =  JSON.stringify(totalprice)
  const storetotalqty =  JSON.stringify(totalqty)

if(totalprice){

  localStorage.setItem("cart" , storecart)
  localStorage.setItem("price" , storetotalprice)
  localStorage.setItem("quantity" , storetotalqty)
}






  
  
  
  }, [totalprice])


  useEffect(() => {
    if(JSON.parse(localStorage.getItem('cart'))){
  console.log("in")
  setcartitems(JSON.parse(localStorage.getItem("cart")))
  settotalprice(JSON.parse(localStorage.getItem("price")))
  settotalqty(JSON.parse(localStorage.getItem("quantity")))
  
    }
  
  }, [])

  
  
const removeitem = (product , id) => {
  console.log(cartitems)
const upadatedcart = cartitems.filter((item , i) => {


    return !(i === id)
})
settotalqty(prev => prev - product.quantity)
settotalprice(prev => prev - product.price * product.quantity)

setcartitems(upadatedcart)


}












const landpageadd = (product , qty ,id) =>{
const checkrepeated = cartitems.find((item) =>  item._id === id)

if(checkrepeated){

const updatecartitems = cartitems.map((item) => {

if(item._id === id) return{

...item, 
quantity:item.quantity + qty


}
})
setcartitems(updatecartitems)
settotalqty(prev => prev + qty)
settotalprice(prev => prev + product.price * qty)

}

else{

// setqty(prev => prev + product.quantity)
product.quantity = qty
settotalqty(prev => prev + product.quantity)
setcartitems([...cartitems , {...product}])
settotalprice(prev => prev + product.price * product.quantity)


}
toast.success('item Added Successfully to the bag')

}



  return (

<Context.Provider value={{showcart, setshowcart ,settotalprice , settotalqty ,setcartitems , cartitems ,totalprice , totalqty ,landpageadd , scroll , setscroll , removeitem}}>

{children}

</Context.Provider>


  )
}

export default StateContext