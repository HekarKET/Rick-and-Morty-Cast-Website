import React, { useState } from 'react';
import './style.css'




const Navbar = () => {

    const [hiddenState, setHiddenState] = useState(false);

    const changeState = () => {
        setHiddenState(!hiddenState);
    }

    return (
        <div className='navbar'>
            <button className='head-logo'>
                <i><img src="https://img.icons8.com/plasticine/30/000000/rick-sanchez.png" alt='Rick icon' /></i>
            </button>

            <button className='mobile-bars' onClick={changeState} >
                <i className={hiddenState ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>

            <ul className='nav-list' id={hiddenState ? 'hidden' : ''}>
                <li className='nav-list-item'>Home</li>
                <li className='nav-list-item'>About</li>
                <li className='nav-list-item'>Source</li>
            </ul>
        </div>

    );
}

export default Navbar;