import React, { use, useEffect, useState } from 'react'
import CartItem from '../components/CartItem';


const Cart = () => {


  const [cart, setCart] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => {
     const cartArr = data.map((item)=>({...item, quantity: 1}))
      setCart(cartArr)
    })
  },[])
 
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
            Your total price is ${}
          </h2>


          <div className='mt-50'>
            <button className='btn-big' type='button' >
               Clear Cart
            </button>
          </div>


     </div>
   </>
  )
}

export default Cart
