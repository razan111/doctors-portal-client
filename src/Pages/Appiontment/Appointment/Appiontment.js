import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppiontments from '../AvailableAppiontments/AvailableAppiontments';

const Appiontment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppiontments
                selectedDate={selectedDate}
                // setSelectedDate={setSelectedDate}

            ></AvailableAppiontments>
        </div>
    );
};

export default Appiontment;