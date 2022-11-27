import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

export default function BookingModal({ clothe, setClothe }) {
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    setClothe(null);
  };
  return (
    <>

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

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
              name="name"
              type="text"
              defaultValue={clothe?.name}
              className="input w-full input-bordered "
            />
            <input
              name="name"
              type="text"
              defaultValue={clothe?.resale_price}
              className="input w-full input-bordered "
            />
            <input
              className="w-full btn btn-accent "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
