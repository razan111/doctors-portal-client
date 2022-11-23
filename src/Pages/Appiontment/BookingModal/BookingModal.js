import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment,refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const bokking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bokking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setTreatment(null)
                toast.success('Booking Confirmed')
                refetch()
            }
            else{
                toast.error(data.message)
            }

        })
        
        

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{treatmentName}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map( (slot, index) => <option 
                                key={index}
                                value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input defaultValue={user?.displayName} disabled name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input defaultValue={user?.email} name='email' disabled type="email" placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" />

                        <input type="submit" value="Submit" className='btn w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;