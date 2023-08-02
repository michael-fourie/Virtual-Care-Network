import React from 'react'
import './CurrentEventInfo.css'; // Import the CSS file for your component
import { Button, ContainerCol,  } from '../../globalStyles'
import { useEffect, useState } from 'react';



const CurrentEventInfo = ({ 
    name,
    info,
    time
}) => {
    return (
        <div className="background-container">
            <div className="row">
                <div className="left-div">
                    <p className="centered-text">Upcoming Events</p>
                </div>
                <div className="right-div">
                    <div className="column">
                        <p className='info-text'>{name}</p>
                        <p className='info-text'>{info}</p>
                        <p className='info-text'>{time}</p>
                        <Button>Register</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CurrentEventInfo