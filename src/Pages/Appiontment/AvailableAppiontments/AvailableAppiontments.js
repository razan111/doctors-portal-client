import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppiontmentOption from './AppiontmentOption';

const AvailableAppiontments = ({ selectedDate }) => {
    const [appiontmentOptions, setAppiontmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appiontmentOptions.json')
            .then(res => res.json())
            .then(data => setAppiontmentOptions(data))
    }, [])
    return (
        <section className='mt-16'>
            <p className='text-xl text-secondary font-bold text-center'>Available Appiontments: {format(selectedDate, 'PP')}</p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
                {
                    appiontmentOptions.map(option => <AppiontmentOption
                        key={option._id}
                        appiontmentOption={option}
                        setTreatment={setTreatment}
                    ></AppiontmentOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>
            }


        </section>
    );
};

export default AvailableAppiontments;