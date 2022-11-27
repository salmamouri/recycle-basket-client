import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

export default function Products() {
  const [clothe, setClothe] = useState(null);
  const [products, setProducts] = useState([]);
  let { title } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setClothe(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setClothe={setClothe}
          ></ProductCard>
        ))}
        {<BookingModal clothe={clothe} setClothe={setClothe} />}
      </div>
    </div>
  );
}
