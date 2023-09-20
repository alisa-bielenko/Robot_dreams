import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>SPA-SALON</h1>
      <div className='header-info'>
        <p>Beretty Str., 15, Kyiv, Ukraine,<br></br>02222</p>
        <img src="https://img.freepik.com/darmowe-wektory/szablon-logo-klubu-spa-kwiat-zloty-nowoczesny-design-wektor_53876-136293.jpg" alt="logo"></img>
        <p>Mon - Fri: 10:00 - 20:00<br></br>Sat - Sun: 12:00 - 20:00</p>
      </div>
    </header>
  );
}

export default Header;