import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

export default function MyProducts() {
  const {user}= useContext(AuthContext);
  const [clothes,setClothes]=useState();
  useEffect(()=>{
    fetch(`http://localhost:5000/product?email=${user?.email}`)
    .then(res=>res.json())
    .then(data => setClothes(data))
  },[])

  
  const deleteProduct =(clothe)=>{
    fetch(`http://localhost:5000/product/${clothe._id}`,{
      method:'DELETE',

    })
    .then(res => {
      res.json()
      setClothes(clothes.filter(colth => colth !== clothe ? colth : ""))
    })
    .then(data => {
      console.log(data);
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
    
        <th>Name</th>
        <th>Product</th>
        <th>Price</th>
        <th>Stauts</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        clothes?.map((clothe)=><tr key={clothe._id}>
                   <td>{user?.displayName}</td>
                  <td>{clothe.name}</td>
                  <td>{clothe.resale_price}</td>
                  <td>
                  <select>
                    <option value="sold">Sold</option>
                    <option value="available">Available</option>
       
      </select>
                    </td>
                  <td><button onClick={()=>deleteProduct(clothe)} className='btn btn-xs btn-error text-white'>Delete</button></td>
        </tr>)
      }
     
      
    
     
    </tbody>
  </table>
</div>
    </div>
  )
}
