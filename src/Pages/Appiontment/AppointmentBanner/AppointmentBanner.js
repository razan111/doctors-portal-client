import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png'



const AppointmentBanner = ({setSelectedDate, selectedDate}) => {
    
    return (
        <header className='my-6' 
        style={{background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
        >
            <div className="hero lg:py-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="lg:w-1/3 md:w-full  rounded-lg shadow-2xl" />
                    <div className='lg:mr-10 mr-0'>
                    <DayPicker 
                    mode='single'
                    selected={selectedDate}
                    onSelect= {setSelectedDate}
                    />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;