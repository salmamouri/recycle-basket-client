import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';

export default function BookingModal({ clothe, setClothe }) {
  const { user } = useContext(AuthContext);
  // const { name, resale_price,  location  }= clothe;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const product = form.product.value;
    const location = form.location.value;
    const price = form.price.value;
    const img = form.img.value;
    console.log(name,email,product,price,location,phone,img);

    const booking = {
     name:name,
     email:email,
     product:product,
     img:img,
     price:price,
     
};

    fetch('http://localhost:5000/bookings',{
      method:"POST",
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(booking)
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
      if ( data.acknowledged){
        setClothe(null);;
          toast.success('Booking Confirmed',{
            position: toast.POSITION.TOP_CENTER});
       
          
      }
      else{
        toast.error(data.message)
      }

  })


    
  };
  return (
    <>

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
         

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-6 mt-12"
          >
            <input
              name="name"
              type="text"
              placeholder="YourName"
              defaultValue={user?.displayName}
              disabled
              className="input w-full input-bordered "
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Email"
              className="input w-full input-bordered "
            />
      
            <input
              name="product"
              type="text"
              value={clothe?.name}
              disabled
              className="input w-full input-bordered "
            />
            <input
              name="price"
              type="text"
              value={clothe?.resale_price}
              disabled
              className="input w-full input-bordered "
            />
            <input
              name="location"
              type="text"
              value={clothe?.location}
              
              className="input w-full input-bordered "
            />
            <input
              name="img"
              type="text"
              value={clothe?.img}
              
              className="input w-full input-bordered "
            />
            <input
              name="phone"
              type="text"
              placeholder='Phone Number'
              className="input w-full input-bordered "
            />
          
            <input
              className="w-full btn btn-primary "
              type="submit"
              value="Submit"
              
            />
             <div className="modal-action">
      <label htmlFor="booking-modal" className="btn mb-5">Done</label>
    </div>
          </form>
        </div>
      </div>
    </>
  );
}
