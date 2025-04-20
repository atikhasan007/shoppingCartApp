export const addToCart = (product) =>{
    return {
        type: 'cart/addToCart',
        payload: product,
    }
}


export const modifyQuantityOfAnItem = (obj) =>{    
    return {
        type: 'cart/modifyQuantityOfAnItem',
        payload: obj,
}
}

export const removeProduct = (id) =>{
    return {
        type: 'cart/removeProduct',
        payload: id,
    }
}

export const clearCart = () =>{
    return {
        type: 'cart/clearCart',
    }
}