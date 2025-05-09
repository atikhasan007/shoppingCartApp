import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../action-creator/cart';





const ProductCard = ({product}) => {

const dispatch = useDispatch();


  return (
    <div className='ingredient'>
         <div className='ingredient-image'>
            <figure>
               <img src={product.image} alt={product.title}/>
            </figure>
         </div>
      
            <div className='ingredient-title'>
                <h2>{product.title}</h2>
            </div>
            
            <div className='ingredient-description'>
                <p className='price'>
                    <span>${product.price}</span>
                </p>
            </div>


          <div className='ingredient-btn'>
            <button onClick={()=> 
              dispatch(addToCart(product))
            } className='btn-white'>Add to Cart</button>
          </div>

    </div>
  )
}

export default ProductCard
