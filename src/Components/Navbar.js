import React from 'react'
import '../Styles/Navbar.css'
import img from "../Images/calendar (354 x 84 px).svg"

export default function Navbar() {
    return (
        <div>
            <div className="nav">
                <div className="logo">
                    <img src={img} alt="" />
                </div>
                <ul>
                    <li><a href="/">METEOR</a></li>
                    <li><a href="/">SOLAR ECLIPSE</a></li>
                    <li><a href="/">WEATHER</a></li>
                </ul>
            </div>
        </div>
    )
}
