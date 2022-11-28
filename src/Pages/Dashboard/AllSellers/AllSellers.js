import React, { useEffect, useState } from 'react'


export default function AllSellers() {
 const [sellers,setSellers] = useState();
 useEffect(()=>{
  fetch('http://localhost:5000/user/seller')
  .then(res=>res.json())
  .then(data=>setSellers(data))
 },[])

 const deleteSeller =(seller)=>{
  fetch(`http://localhost:5000/user/${seller._id}`,{
    method:'DELETE',

  })
  .then(res => {
    res.json()
    setSellers(sellers.filter(sell => seller !== sell? sell : ""))
  })
  .then(data => {console.log(data);
  })
}
  return (
    <div>
    <div className="overflow-x-auto">
<table className="table w-full">

  <thead>
    <tr>
  
      <th>Name</th>
      <th>Email</th>
      <th></th>
      
    </tr>
  </thead>
  <tbody>
    {
      sellers?.map((seller)=><tr key={seller._id}>
                 <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td><button onClick={()=>deleteSeller(seller)}  className='btn btn-xs btn-error text-white'>Delete</button></td>
      </tr>)
    }
   
    
  
   
  </tbody>
</table>
</div>
  </div>
  )
}
