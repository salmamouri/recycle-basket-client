import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

import CollectionCard from './CollectionCard/CollectionCard';

export default function Collections() {
    const [allCollection,setAllCollection] = useState();
    useEffect(() =>{
        fetch('http://localhost:5000/collections')
        .then(res=>res.json())
        .then(data => setAllCollection(data))
    },[])
    
  return (
    <div className="mt-40">
        <h3 className='text-5xl my-16 text-center text-secondary font-bold'> Collections</h3>
    <div className='  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
       {
        allCollection?.map(collection =><CollectionCard
        key={collection._id}
        collection={collection}
        ></CollectionCard>)
       }
    </div>
    </div>
  )
}
