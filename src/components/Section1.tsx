import React, { FunctionComponent } from 'react';
import { CommandCard } from './CommandCard';
import { MapCard } from './MapCard';
import { StepProgressBar } from './StepProgressBar';
import { ReservationForm } from './ReservationForm';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        margin: '10rem',
		fontFamily: 'Anybody',
        zIndex:'1'
    };
    const sectionCardStyle = {
        margin: '8rem',
        display: 'flex',
		fontFamily: 'Anybody',
    };

    const map_Card_Style = {
        flex: '1',
        width: '100%',
        zIndex: '3',
    };

    return (
           
        <div className='section1' style={sectionStyle}>

        <StepProgressBar/>
        <ReservationForm/>
        <div className='section1' style={sectionCardStyle}>
            <div style={map_Card_Style}>
                {/* <MapCard/> */}
            </div>
            
        </div>
        </div>
    );
};

export default Section1;
