import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard';

export default function Products() {
    const products = useLoaderData();
    console.log(products);
    const{name,img,resale_price,original_price,location,used,posted}=products
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        {
            products?.map(product=> <ProductCard
            key={product._id}
            product={product}
            ></ProductCard>)
        }
       
    </div>
  )
}
