import React, { useEffect, useState } from 'react'

export default function AllBuyers() {
  const [buyers,setBuyers] = useState();
 useEffect(()=>{
  fetch('http://localhost:5000/user/buyer')
  .then(res=>res.json())
  .then(data=>setBuyers(data))
 },[])

 const deleteBuyer =(buyer)=>{
  fetch(`http://localhost:5000/user/${buyer._id}`,{
    method:'DELETE',

  })
  .then(res => {
    res.json()
    setBuyers(buyers.filter(buy => buyer._id !== buy._id ? buy : ""))
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
     
      
    </tr>
  </thead>
  <tbody>
    {
      buyers?.map((buyer)=><tr key={buyer._id}>
                 <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td><button onClick={()=>deleteBuyer(buyer)}  className='btn btn-xs btn-error text-white'>Delete</button></td>
                
      </tr>)
    }  
  </tbody>
</table>
</div>
  </div>
  )
}
