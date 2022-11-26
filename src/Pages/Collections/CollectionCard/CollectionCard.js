import React from 'react'

export default function CollectionCard({collection}) {
  const {img,title}= collection;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure ><img style={{height:'350px',width:'300px'}} src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold text-secondary">{title}</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}
