import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Servicce from './Servicce';

const Services = () => {

    const serviccesData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay.',
            img: fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: 'Basically, a cavity is hole in the tooth . This is often often caused by bacteria, which builds up from eating unhealthy food and not caring for your teeth properly.',
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.',
            img: whitening
        },

    ]

    return (
        <div className='mt-16'>
           <div className='text-center'>
            <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
            <h4 className='text-3xl'>Services We Provide</h4>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    serviccesData.map(service => <Servicce
                    key={service.id}
                    service={service}
                    ></Servicce>)
                }
           </div>
        </div>
    );
};

export default Services;