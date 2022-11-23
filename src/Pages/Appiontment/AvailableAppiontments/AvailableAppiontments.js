import { format } from 'date-fns';
import React, {  useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppiontmentOption from './AppiontmentOption';
import { useQuery } from '@tanstack/react-query'
import Spiner from '../../../components/Spiner/Spiner'

const AvailableAppiontments = ({ selectedDate }) => {
    // const [appiontmentOptions, setAppiontmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    const date = format(selectedDate, 'PP');

    const {data: appiontmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appiontmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    if(isLoading){
        return <Spiner></Spiner>
    }

    // const {} = 

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppiontmentOptions(data))
    // }, [])
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
                    refetch={refetch}
                ></BookingModal>
            }


        </section>
    );
};

export default AvailableAppiontments;