import React, { useEffect, useState } from 'react'
import '../styles/Shop.css';
import ProductCard from '../components/ProductCard';
const Shop = () => {
    const [products, setProducts]  = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
  return (
    <div>
        <h1>Shop</h1>
        <div className='products'>
            {products.map(product => (
                <ProductCard product={product}/>
            ))}
        </div>
    </div>
  )
}

export default Shop
