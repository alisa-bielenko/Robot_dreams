import React from "react";
import './styles.css';

export default function Header() {
    return (
        <div className='logo'>
            <img src='assets/icons/cloudy.png' alt='weather' className='logo-image'/>
            <p className='logo-text'>MY WEATHER</p>
        </div>
    )
}