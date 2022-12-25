import React from 'react'
import './topbar.css'
import PersonIcon from '@mui/icons-material/Person';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="left">docsify</div>
            <div className="middle"></div>
            <div className="right">
                <PersonIcon className='person' />
            </div>
        </div>

    )
}
