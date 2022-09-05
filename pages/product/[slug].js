import React,{useContext, useEffect , useState} from 'react'
import { client , urlFor  } from '../../lib/client'
import { Context } from '../../context/StateContext'
// import { Rating } from 'react-simple-star-rating'
// import { Footer } from '../../components'







const ProductDetails = (product , products) => {
    const [qtyy, setqtyy] = useState(1)
const context= useContext(Context)
const {setscroll , landpageadd} = context
const [index, setindex] = useState(0)
const [rating, setRating] = useState(0) // initial rating value


console.log(products)


// Catch Rating value
// const handleRating = (rate) => {
//   setRating(rate)
//   // other logic
// }

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
    <div className='product-details'>
        <div className='product-details-container'>
            <div className='other-image'>
            <img onMouseEnter={() => setindex(1)} onMouseLeave={() => setindex(0)} src={urlFor(product.product.image[1])} alt='Ball' className='image-other' />

            </div>
        <img src={urlFor(product.product.image[index])} alt='Ball' className='image-slug' />
<div className='ball-info'>
    <p>Basketball</p>
<h2 className='product-name'>{product.product.name}</h2>
{/* <Rating onClick={() => handleRating} ratingValue={rating} /> */}
<div className='price'>
    
<h2>Price :</h2>
<h2>${product.product.price}</h2>


</div>
<div className='qty-change'>
<label className='slug-qty'>Qty: </label>
<input className='input-num' onChange={(e) => setqtyy(e.target.value)} value={qtyy} type='number' title='Qty' min='1' max='1000' />
</div>
<button className='add-to-bag' onClick={() => landpageadd(product.product , parseInt(qtyy) , product.product._id)} type='button'>ADD TO BAG</button>



</div>



        </div>




  

    </div>
    {/* <Footer/> */}
    </>
  )
}








  export const getStaticPaths =async () => {
    const query = `*[_type == "product"] {slug{current}}`

const products =await client.fetch(query)
const paths = products.map((product)  => ({

    params:{
        slug:`${product}`
        
    }
    
    
}))

return{
    paths
    ,fallback:'blocking'
}

}


export const getStaticProps = async({params:{slug}}) => {
const query = `*[_type == "product"][0]`
const queryall = `*[_type == "product"]`

const product = await client.fetch(query)
const products = await client.fetch(queryall)



return { 

  props:{product , products},
  revalidate: 10,

}

}








export default ProductDetails
