import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='py-16'
        style={{background: `url(${appointment})`}}
        >
            <div className='text-center mb-12'>
                <h3 className="text-xl text-primary font-bold">Contact Us</h3>
                <h3 className='text-4xl text-white'>Stay connected with us</h3>
            </div>

            <div className="hero">                
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <textarea className="textarea textarea-bordered " placeholder="Your Message"></textarea>
                            </div>

                            <div className="text-center mt-6">
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Contact;