import React , {useContext} from 'react'

import { Product } from '../components'
import { GiBasketballBall } from "react-icons/gi";
import { Context } from '../context/StateContext';

const LandPage = ({product}) => {
const handleshowmore = () => {

window.scrollTo({

    top: 720,
    left: 0,
    behavior: 'smooth'


})


}

  return (
    <div className='land'>
<div className="img"></div>
<div className="banner">
   <h1><span>D</span>escover</h1>
    <h1><span>O</span>ur</h1>
    <h1><span>N</span>BA</h1>
    <h1><span>B</span>alls</h1>
</div>

<div className="some-products">
<h1>Most Selling </h1>
<div className="cards-container">

{product.slice(0,3).map((product , i) => (

<Product key={i} product={product}  />

))}
</div>



</div>
<div className="show-more">

<GiBasketballBall size={30} className='more'/>
<p onClick={handleshowmore} className='showmore' >Show More</p>
<p onClick={handleshowmore} className='showprod' >Show products</p>
</div>


    </div>
  )
}

export default LandPage