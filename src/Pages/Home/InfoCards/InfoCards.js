import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: "Opening Hour's",
            description: "Open 9.00 am to 5.00 pm every day but Friday off day",
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: "Visit Our Location",
            description: "Shukarbad 8/4 Dhaka, Bangladesh",
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: "Contact Us Now",
            description: "01611042716",
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='grid mt-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 text-white'>
            {
                cardData.map(card => <InfoCard 
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;