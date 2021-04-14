import React from 'react';
import Navbar from './navbar'

const header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="image-text">
                <h1> The Rick and Morty Website </h1>
                <img className='header-image' src='https://wallpapercave.com/wp/wp4791005.png' alt='header-background'></img>

            </div>

        </div>
    );
}

export default header;