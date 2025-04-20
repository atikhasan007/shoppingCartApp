import React, { useState } from 'react'

const CartItem = ({item}) => {
 
    const [itemQuantity, setItemQuantity] = useState(item.quantity)


  return (
    <tr>
        <td>
            <div className='Product'>
                <img
                  src={item.image}
                  alt='product'
                  className='product-img' />

            </div>
        </td>
        <td>
           <p>{item.title}</p>
         </td>

         <td>${item.price}</td>

       <td>
          <div className='qty-input'>
             <button className='qty-count qty-count-minus'>
                 <figure>-</figure>
             </button>
             <input 
             type='number' 
             className='product-qty'
              min={1}
              value={itemQuantity}
              onChange={() => {}}
              
              />
              
              <button className='qty-count qty-count-plus'> 
                <figure>+</figure>
              </button>

          </div>
       </td>

       <td>${item.price * item.quantity}</td>
       <td>
         <button className='btn-delete'>
            X
         </button>
       </td>

    </tr>
  )
}

export default CartItem
