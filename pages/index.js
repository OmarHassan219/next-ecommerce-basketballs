import Head from 'next/head'
import Image from 'next/image'
import React , {useContext , useEffect} from 'react'
import { LandPage  ,ShowingProducts ,Footer } from '../components'
import { client } from '../lib/client'
import  {Context}  from '../context/StateContext'


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.










export default function Home({product}) {

  


  const context = useContext(Context)
  const {showcart , setscroll , scroll} = context

const handelscroll = () => {

const scroled = window.scrollY
if(scroled > 100){

setscroll(true)

}else{
setscroll(false)

}



}


useEffect(() => {
  window.addEventListener('scroll' , handelscroll)


  return () => {
    window.removeEventListener('scroll' , handelscroll)

  }
}, [])

  

  return (
   <>
   <LandPage product={product}/>
  
   <ShowingProducts product={product}/>

<Footer/>

  
   </>
   
  )
}












export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);



  return {
    props: {products}
  }
}
