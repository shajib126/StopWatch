import React from 'react';
import './Navbar.css'
import logo from '../../logo.png'

const Navbar = () => {
    return (
        <nav className="navBar">
           <div className="image">
                <img src={logo} alt=""/>
           </div>

           <div className="list">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/">About</a>
                    </li>

                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
           </div>
        </nav>
    );
};

export default Navbar;