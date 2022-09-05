import React ,{useState , useContext} from 'react'
import { urlFor } from '../lib/client'


import Link from 'next/link'


const Product = ({product}) => {
const [i, seti] = useState(0)
  return (
<>
<Link  href={`/product/${product.slug.current}`}>
    <div className='card'>

<img onMouseLeave={() => seti(0)} onMouseEnter={() => seti(1)} className='land-page-img' src={ urlFor(product.image[i]) } alt='NBA Ball' />
    
<div className="ball-name">
    
    <p className='name'>
    {product.name} 

    </p>

<p>${product.price}</p>













    {/* <div className='flex'>
    <div className="plus-minus">
        <span>{ownqty}</span>
        <div className="arrows">
        <IoIosArrowUp onClick={() => setownqty(prev => prev +1)} size={10}/>
<IoIosArrowDown onClick={() => setownqty(prev => prev - 1)} size={10}/>
        </div> */}
        
    </div>
    
{/* <IoBagAddSharp  onClick={ () => landpageadd(product.product , ownqty)} title='Add to Cart' className='add-to-icon' /> */}
    </div>
   
    
    
    {/* // </div> */}


    </Link>


</>
    // </div>
  )
}

export default Product