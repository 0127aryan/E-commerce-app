import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState' 

const BtnRender = (product) => {

    const state = useContext(GlobalState)
    const [isAdmin] = state.UserApi.isAdmin
    const addCart = state.UserApi.addCart

  return (
    <div className='rowbtn'>
{
  isAdmin ?
  <>

 

  <Link id='btnbuy' to={'#!'}>   
    Delete
  </Link>

  <Link id='btnview' to={`detail/${product._id}`}>
    Edit
  </Link>
  </> 
  :
  <>
  <Link id='btnbuy' to={'#!'} onClick={() => {
    addCart(product._id)
  }}>   
    Buy Now
  </Link>

  <Link id='btnview' to={`detail/${product._id}`}>
    View 
  </Link>
  </> 


}
</div>
  )
}

export default BtnRender
