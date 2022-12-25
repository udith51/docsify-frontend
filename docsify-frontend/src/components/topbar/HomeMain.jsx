import React from 'react'
import './homeMain.css'
import Patient from '../../assets/patient.png'
import Doctor from '../../assets/doctor.png'
import Blog from '../../assets/blog.png'
import Appointment from '../../assets/appointment.png'
import Box from './Box'

export default function HomeMain() {
    return (
        <div className="homeMain">
            <Box image={Doctor} content="I'm a Doctor" bg={{ background: 'rgb(211, 36, 219)' }} />
            <div className="mid">
                <div className="space"></div>
                <Box image={Blog} content="Read a Blog" bg={{ background: 'rgb(255,200,123)' }} />
            </div>
            <Box image={Patient} content="I'm a Patient" bg={{ background: 'rgb(123,223,231)' }} />
            <div className="mid">
                <div className="space"></div>
                <Box image={Appointment} content='Book an appointment' bg={{ background: 'rgb(255,123,123)' }} />
            </div>
        </div>

    )
}
