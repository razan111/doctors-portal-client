import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import SingleReview from './SingleReview';

const Testimonial = () => {

    const reviewsData = [
        {
            id: 1,
            name: "Winson Herry",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person1
        },
        {
            id: 2,
            name: "Winson Herry",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person2
        },
        {
            id: 3,
            name: "Winson Herry",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person3
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl text-primary font-bold'>Testimonial</h2>
                    <h3 className='text-4xl'>What our Patinents Says</h3>
                </div>
                <figure><img className='lg:w-48 w-24' src={quote} alt="" /></figure>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    reviewsData.map(review => <SingleReview
                    key={review.id}
                    review={review}
                    ></SingleReview>)
                }
            </div>
        </section>
    );
};

export default Testimonial;