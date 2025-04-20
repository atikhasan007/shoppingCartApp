import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifyQuantityOfAnItem, removeProduct } from '../action-creator/cart';

const CartItem = ({ item }) => {
    const [itemQuantity, setItemQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    return (
        <tr>
            <td>
                <div className='Product'>
                    <img src={item.image} alt='product' className='product-img' />
                </div>
            </td>
            <td><p>{item.title}</p></td>
            <td>${item.price}</td>
            <td>
                <div className='qty-input'>
                    <button
                        className='qty-count qty-count-minus'
                        onClick={() => {
                            if (itemQuantity > 1) {
                                dispatch(modifyQuantityOfAnItem({
                                    id: item.id,
                                    quantity: itemQuantity - 1,
                                }));
                                setItemQuantity(itemQuantity - 1);
                            }
                        }}
                    >
                        <figure>-</figure>
                    </button>
                    <input
                        type='number'
                        className='product-qty'
                        min={1}
                        value={itemQuantity}
                        onChange={(e) => {
                            const newQty = Number(e.target.value);
                            if (newQty >= 1) {
                                dispatch(modifyQuantityOfAnItem({
                                    id: item.id,
                                    quantity: newQty,
                                }));
                                setItemQuantity(newQty);
                            }
                        }}
                    />
                    <button
                        className='qty-count qty-count-plus'
                        onClick={() => {
                            dispatch(modifyQuantityOfAnItem({
                                id: item.id,
                                quantity: itemQuantity + 1,
                            }));
                            setItemQuantity(itemQuantity + 1);
                        }}
                    >
                        <figure>+</figure>
                    </button>
                </div>
            </td>
            <td>${item.price * itemQuantity}</td>
            <td>
                <button
                    onClick={() => dispatch(removeProduct(item.id))}
                    className='btn-delete'
                >
                    X
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
