import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { modifyQuantityOfAnItem } from '../action-creator/cart';

const CartItem = ({item}) => {
 
    const [itemQuantity, setItemQuantity] = useState(item.quantity)
    const dispatch = useDispatch();



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
             <button className='qty-count qty-count-minus'
             onClick={()=>{
                dispatch(modifyQuantityOfAnItem({
                    id : item.id,
                    quantity: itemQuantity - 1,
                }));
                setItemQuantity(itemQuantity - 1);
             }}>
                 <figure>-</figure>
             </button>
             <input 
             type='number' 
             className='product-qty'
              min={1}
              value={itemQuantity}
              onChange={(e) => {
                dispatch(modifyQuantityOfAnItem({
                    id : item.id,
                    quantity: Number(e.target.value),
                }));
                setItemQuantity(e.target.value);
              }}
              
              />
              
              <button className='qty-count qty-count-plus'
              onClick={()=>{dispatch(modifyQuantityOfAnItem({
                id : item.id,
                quantity: itemQuantity + 1,
              }));
               setItemQuantity(itemQuantity + 1);
            }}
              > 
                <figure>+</figure>
              </button>

          </div>
       </td>

       <td>${item.price * item.quantity}</td>
       <td>
         <button onClick={()=>dispatch(modifyQuantityOfAnItem({
            id : item.id,
            quantity: 0,
         }))} className='btn-delete'>
            X
         </button>
       </td>

    </tr>
  )
}

export default CartItem
