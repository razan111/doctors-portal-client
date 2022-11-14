import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppiontmentOption = ({ appiontmentOption , setTreatment}) => {
    const { name, slots } = appiontmentOption;
    return (
        <div className="card bg-base-100 shadow-2xl">
            <div className="card-body text-center">
                <h2 className="text-secondary text-2xl font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0]: 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                   
                    <label
                    disabled = {slots.length === 0}
                     onClick={() => setTreatment(appiontmentOption)} className='btn btn-primary text-white bg-gradient-to-r from-primary to-secondary font-semibold'  htmlFor="booking-modal">Book Appointment</label>
              
                </div>
            </div>
        </div>
    );
};

export default AppiontmentOption;