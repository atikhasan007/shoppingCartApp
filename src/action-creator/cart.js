// export const addToCart = (product) => ({
//     type: 'cart/addToCart',
//     payload: product,
// });

// export const modifyQuantityOfAnItem = (obj) => ({
//     type: 'cart/modifyQuantityOfAnItem',
//     payload: obj,
// });

// export const removeProduct = (id) => ({
//     type: 'cart/removeProduct',
//     payload: id,
// });

// export const clearCart = () => ({
//     type: 'cart/clearCart',
// });



// import { createAction } from '@reduxjs/toolkit';

// export const addToCart = createAction('cart/addToCart');
// export const modifyQuantityOfAnItem = createAction('cart/modifyQuantityOfAnItem');
// export const removeProduct = createAction('cart/removeProduct');
// export const clearCart = createAction('cart/clearCart');

import { addToCart
     ,modifyQuantityOfAnItem,
      removeProduct,
       clearCart 
    } from "../store/reducers/cartReducer";
export {
    addToCart,
    modifyQuantityOfAnItem,
    removeProduct,
    clearCart
}