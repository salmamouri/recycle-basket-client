import React from 'react'

export default function ProductCard({product}) {
    const{name,img,resale_price,original_price,location,used,posted}=product;
  
  return (

       <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body font-semibold items-center text-center">
    <h2 className="card-title text-secondary font-bold">{name} </h2>
    <h3>Original Price : ${original_price}</h3>
    <h3>Resale Price : ${resale_price}</h3>
    <h3>Used : {used}</h3>
    <h3>Location: {location}</h3>
    <h3>Posted:{posted}</h3>
    
    <div className="card-actions">
      <button className="btn btn-primary my-5">Book Now</button>
    </div>
  </div>
</div>
    
  )
}
