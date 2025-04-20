import React, { use, useEffect, useState } from 'react'
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Cart = () => {
const dispatch = useDispatch();
const cart  = useSelector((storeState)=> storeState.cart);
let totalSum = 0;
cart.forEach((item)=>{
  totalSum += item.price * item.quantity;
})
  


  return (
   <>
     <div className='.account-setting__content'>
         <div className='account-setting__content__title'>
          <h4>Product List in your Cart</h4>
         </div>
         <div className='product-table-container'>
           <table>
               <thead>
                  <tr>
                      <th>image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                 {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} item = {cartItem}/>
                 ))}
                  
               </tbody>
           </table>

         </div>


          <h2 className='total-price'>
            Your total price is ${totalSum}
          </h2>


          <div className='mt-50'>
            <button  onClick={()=>{
              dispatch({
                type: 'cart/clearCart',
                payload: cart,
              })
            }} className='btn-big' type='button' >
               Clear Cart
            </button>
          </div>


     </div>
   </>
  )
}

export default Cart
