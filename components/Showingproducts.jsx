import React from 'react'
import {Product} from '.'



const ShowingProducts = ({product}) => {
  return (
    <div className='products-section'>
<h1>Basketballs</h1>
<div className="products-show">

{product.map((product , i) => (

<Product key={i} product={product}  />

))}

</div>

    </div>
  )
}

export default ShowingProducts