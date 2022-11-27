import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

export default function Products() {
  const[ clothe, setClothe] = useState(null);
   const [products ,setProducts] = useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=> res.json())
    .then(data=>setProducts(data))
   },[])
  return (
    <div>
     <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20">
     {
        products.map(product => <ProductCard
        key={product._id}
        product={product}
        setClothe={setClothe}
        ></ProductCard>)
      }
      { 
        <BookingModal clothe={clothe}
        setClothe={setClothe}
        />
      }
     </div>
    </div>
  )
}
