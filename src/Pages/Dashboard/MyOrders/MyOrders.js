import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

export default function MyOrders() {
  const {user}=useContext(AuthContext);
  const [bookings,setBookings]=useState();
  useEffect(()=>{
    fetch(`https://recycle-basket-server.vercel.app/booking?email=${user.email}`)
    .then(res=>res.json())
    .then(data => setBookings(data))
  },[])

  return (
    <div>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead >
      <tr className='text-secondary text-3xl '>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
   
      {
        bookings?.map(book=><tr key={book._id}>
             <td>
             <div className="avatar">
  <div className="w-24 rounded">
    <img src={book.img} />
  </div>
</div>
             </td>
             <td>{book.product}</td>
             <td>{book.price}</td>
             <td>
             {
                      book.price && !book.paid &&
                      <Link to={`/dashboard/payment/${book._id}`}>
                      <button className="btn btn-sm btn-primary text-secondary">Pay</button>
                      </Link>
                      }
                      {
                      book.price && book.paid &&
                      <span className=" text-success">Paid</span>
                      }
             </td>
        </tr>)
      }
   
      
    </tbody>
   
 
    
  </table>
</div>
    </div>
  )
}
