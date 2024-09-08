import React from 'react';
import BtnRender from './BtnRender';


const ProductList = ({ product,isAdmin }) => {


  

  return (
    <div className='productcard'>
    {
      isAdmin && <input type='checkbox' checked={product.checked}></input>
    }
      <img src={product.images.url || 'default-image.jpg'} alt={product.title} />

      <div className='productbox'>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>

      <BtnRender product={product}/>
    </div>
  
  );
};

export default ProductList;
