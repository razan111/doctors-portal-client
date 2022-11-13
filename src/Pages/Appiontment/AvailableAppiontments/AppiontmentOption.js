import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppiontmentOption = ({ appiontmentOption }) => {
    const { name, slots } = appiontmentOption;
    return (
        <div className="card bg-base-100 shadow-2xl">
            <div className="card-body text-center">
                <h2 className="text-secondary text-2xl font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0]: 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppiontmentOption;