import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'

const Cart = () => {
  const state = useContext(GlobalState)
  const [cart] = state.UserApi.cart

  if(cart.length === 0)
    return <h3 style={{textAlign:'center', fontSize:'5rem'}}>Your Cart is empty</h3>
  return (
    <div>
    {cart.map(product => (
      <div className='detail'>
        {product.images && product.images.url && (
          <img src={product.images.url} alt=''/>
        )}
        <div className='box-detail'>
          <div className='row'>
            <h2>{product.title}</h2>
            <h6>{product.product_id}</h6>
          </div>
          <span>${product.price}</span> 
          <p>{product.description}</p> 
          <p>{product.content}</p>
          <p>Sold:{product.sold}</p>
          <Link to='/cart' className='cart'>Buy Now</Link>
        </div>
      </div>
    ))}

    </div>
  )
}

export default Cart