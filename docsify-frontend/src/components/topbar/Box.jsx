import React from 'react'
import './box.css'

export default function Box(props) {
    const { image, content, bg } = props
    const mystyle = { bg }
    console.log(bg);

    return (
        <div className="box" style={bg}>
            <img src={image} alt="" />
            <div className='content'>{content}</div>
        </div>
    )
}
